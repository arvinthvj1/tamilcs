"use client";
import React, { useEffect, useState } from "react";
import { fetchData } from "@/fe-handlers/requestHandlers";
import ThumbCard from "@/app/components/ThumbCard";
import Pagination from "@/app/components/Pagination";
import RootLayout from "@/app/layout";

export const getData = async (page) => {
  const limitPerPage = 12;
  const skip = (page - 1) * limitPerPage;
  let aggregationQuery = [
    {
      $facet: {
        data: [
          {
            $lookup: {
              from: "lang_videos_related",
              localField: "id",
              foreignField: "cat_id",
              as: "related_data",
            },
          },
          { $sort: { id: 1 } },
          { $skip: skip },
          { $limit: limitPerPage },
        ],
        total_count: [
          {
            $group: {
              _id: null,
              count: { $sum: 1 },
            },
          },
        ],
      },
    },
  ]
  const data = await fetchData("lang_videos", aggregationQuery);
console.log("aggregationquery",aggregationQuery)
  return {
    data: data[0].data,
    totalCount: data[0].total_count[0].count,
  };
};

const Home = ({ data: initialData, totalCount: initialTotalCount }) => {
    const [data, setData] = useState(initialData);
    const [totalCount, setTotalCount] = useState(initialTotalCount);
    const [isClient, setIsClient] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    const handlePageChange = async (page) => {
      setLoading(true);
      const { data: newData, totalCount: newTotalCount } = await getData(page);
      setData(newData);
      setCurrentPage(page);
      setTotalCount(newTotalCount);
      setLoading(false); // Assuming data fetching is completed
    };
  
    return isClient ? (
      <RootLayout isLoading={isLoading}>
        <div className="relative">
          {isLoading && (
            <div className="loading-wrapper absolute inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
              <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
          )}
          <div className="bg-indigo-100 py-6 md:py-12">
            <div className="container px-4 mx-auto">
              <h1 className="text-3xl font-bold text-center mb-5">
                தமிழ் கிறிஸ்தவ பாடல்கள்
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
                {data.map((video, index) => (
                  <ThumbCard key={index} video={video} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalCount}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </RootLayout>
    ) : (
      <></>
    );
  };

  
export default Home;
