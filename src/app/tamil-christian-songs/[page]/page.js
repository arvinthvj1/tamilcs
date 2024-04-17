import React from "react";
import { fetchData } from "@/fe-handlers/requestHandlers";
import ThumbCard from "@/app/components/ThumbCard";
import Pagination from "@/app/components/Pagination";

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

const Home =async({params}) => {
    const { data, totalCount } = await getData(params?.page)
    return ( 
      <div className="relative">
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
                currentPage={params.page}
                totalPages={totalCount}
                slug={'tamil-christian-songs'}
                // onPageChange={()=>{}}
              />
            </div>
          </div>
        </div>
        )
  };

  
export default Home;
