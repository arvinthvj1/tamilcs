import React from "react";
import Image from "next/image";
import ThumbCard from "../../app/components/ThumbCard";
import axios from 'axios';
// const getData = async () => {
//     const res = await axios.post("/api/home", {
//         aggregationQuery: [
//             {
//                 $lookup: {
//                     from: "lang_videos_related",
//                     localField: "id",
//                     foreignField: "cat_id",
//                     as: "related_data"
//                 }
//             },
//             {
//                 $sort: {
//                     id: 1
//                 }
//             },
//             { $skip: (0) * 10 },
//             { $limit: 10 }
//         ],
//         collectionName : "lang_videos"
//     });
//     const data = await res.data;
//     return data;
// }


    const getData = async () => {
        const res = await fetch('http://localhost:3000/api/home', {
        method: 'post',
        body: JSON.stringify({})
        })
    }
export default async function Home() {
    const festivals = ['Good Friday', 'Easter', 'Palm Sunday', 'Christmas'];
    const data = await getData();
        console.log('data');
    return (
        <div className="">
            <div className="bg-indigo-100 py-6 md:py-12">
                <div className="container px-4 mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-5">தமிழ் கிறிஸ்தவ பாடல்கள்</h1>
                    {JSON.stringify(data)}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
                        {
                            Array(12).fill(0).map((_, index) => (
                                <ThumbCard key={index} />
                            ))

                        }
                    </div>
                    <nav aria-label="Page navigation example" className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 dark:text-gray-400">
                            Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Videos
                        </span>
                        <ul className="inline-flex -space-x-px text-base h-10">
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    );
}
