import React from "react";
import ThumbCard from "../app/components/ThumbCard";

export default function Home() {
    const festivals = ['Good Friday','Easter','Palm Sunday','Christmas'];
    return (
        <div className="">
            <div className="bg-indigo-100 py-6 md:py-12">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-5">
                        {
                            Array(10).fill(0).map((_, index) => (
                                <div key={index} className="w-full max-w-sm py-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="flex flex-col items-center">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="container px-4 mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-5">தமிழ் கிறிஸ்தவ பாடல்கள்</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
                        {/* <ThumbCard />
                        <ThumbCard />
                        <ThumbCard />
                        <ThumbCard /> */}
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-5">മലയാളം ക്രിസ്ത്യൻ ഗാനങ്ങൾ</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* <ThumbCard />
                        <ThumbCard />
                        <ThumbCard />
                        <ThumbCard /> */}
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-5">Festival Songs</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    {
                        festivals.map((data, index) => (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 text-center" key={index}>
                            <img className="w-24 h-24 mx-auto mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">50 Videos</span>
                        </div>
                        ))
                    }
                </div>
            </div> 
        </div>
    );
}
