import React from "react";
import Image from "next/image";
import axios from 'axios';
import { fetchData } from "@/fe-handlers/requestHandlers";
import ThumbCard from "@/app/components/ThumbCard";
import ThumbCardRel from "@/app/components/ThumbCardRel";
const getData = async (id) => {
    console.log("slug",id);
    let data = await fetchData("lang_videos", [
        {
          $match: {
            id: Number(id)
          }
        },
        {
          $lookup: {
            from: "lang_videos_related",
            localField: "id",
            foreignField: "cat_id",
            as: "related_data"
          }
        }
      ])
    return data[0];
}
// const slugify = (text) => {
// return text.toString().toLowerCase()
//   .replace(/\s+/g, '-')           // Replace spaces with -
//   .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
//   .replace(/\-\-+/g, '-')         // Replace multiple - with single -
//   .replace(/^-+/, '')             // Trim - from start of text
//   .replace(/-+$/, '');            // Trim - from end of text
// };
export default async function Home({ params }) {
    const data = await getData(params.id);
    const firstRelatedData = data.related_data[0];
    // const slug = slugify(data.title);
   // console.log(data);
    return (
        <div className="">
            <div className="bg-indigo-100 py-6 md:py-12">
                <div className="container px-4 mx-auto">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-2/3 lg:w-8/12 p-4">
                        <h1 className="text-3xl font-bold mb-5 capitalize">{data.title}</h1>
                        <div className="ratio ratio-16x9 shadow bg-white rounded-lg overflow-hidden">
                            <iframe src={`https://www.youtube.com/embed/${firstRelatedData.video}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="p-3 my-3 shadow bg-white rounded-md"><div dangerouslySetInnerHTML={{ __html: data.content }} /></div>
                    </div>
                    <div class="w-full md:w-1/3 lg:w-4/12 p-4">
                        <h2 className="text-2xl font-bold mb-3">Related Videos</h2>
                        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-6 mb-5">
                            {
                                data.related_data.map((video, index) => (
                                    <ThumbCardRel key={index} video={video} /> 
                                ))
                            }
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}
