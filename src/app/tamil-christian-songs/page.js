import React from "react";
import Image from "next/image";
import axios from 'axios';
import { fetchData } from "@/fe-handlers/requestHandlers";
import ThumbCard from "../components/ThumbCard";
import Pagination from "../components/Pagination";
const getData = async () => {
    let data = await fetchData("lang_videos", [
        {
            $lookup: {
                from: "lang_videos_related",
                localField: "id",
                foreignField: "cat_id",
                as: "related_data"
            }
        },
        {
            $sort: {
                id: 1
            }
        },
        { $skip: (0) * 12 },
        { $limit: 12 }
    ])
    return data;
}
export default async function Home() {
    const festivals = ['Good Friday', 'Easter', 'Palm Sunday', 'Christmas'];
    const data = await getData();
    // console.log(data);
    return (
        <div className="">
            <div className="bg-indigo-100 py-6 md:py-12">
                <div className="container px-4 mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-5">தமிழ் கிறிஸ்தவ பாடல்கள்</h1>
                    {data.length}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
                        {
                            data.map((video, index) => (
                                <ThumbCard key={index} video={video} />
                            ))
                        }
                    </div>

                    <Pagination />
                </div>
            </div>

        </div>
    );
}
