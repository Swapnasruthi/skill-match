import React from 'react'

const ProjectCard = ({data}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
            
        <div className="border rounded-xl p-4 flex justify-between items-center shadow-lg w-8/12 my-10 bg-gray-800 text-white hover:shadow-2xl transition duration-300 relative">
            <div>
                <h2 className="my-3">
                <span className="text-xl font-bold mb-2">{data.Title} </span>
                <span className="text-sm text-gray-500 mb-1">2h.</span>
                </h2>
              

                <p className="text-gray-300 mb-2">
                {data.Description}
                </p>

                {/* Project Info */}
                <p className="text-sm mb-1">{data.Domain}</p>
                <p className="text-sm text-gray-500 mb-1">Created by: {data.Creator}</p>

                {/* Difficulty Level */}
                {/* <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                Intermediate Level
                </span> */}

                <p className="text-sm text-gray-400 mb-1">Tech Stack: {data.Tech}</p>
                <p className="text-sm text-gray-400 mb-1">{data.Count} | Need: {data.Skills}</p>
                <p className="text-sm text-red-400 mb-1">Deadline: {data.Deadline}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 my-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Clone</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">API Based</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">Responsive</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">Hiring</span>
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2 py-1 rounded-full">Remote</span>
                </div>

                {/* Application Stats */}
                <p className="text-sm text-gray-500 mb-4">12 people applied</p>

                {/* Post Actions */}
                <div className="w-full flex gap-6 text-gray-300 text-sm justify-between p-3 rounded-lg">
                    <div className="flex gap-5 flex-row justify-between "> 
                        {/* Like */}
                        <div className='flex gap-4 hover:bg-black transition duration-200 rounded-lg p-2 px-4'>
                            <button className="flex flex-row items-center gap-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                </svg>
                                <span className='font-semibold text-lg'>Like</span>
                            </button>
                        </div>
                       
                       {/* comment */}
                        <div className='flex gap-4 hover:bg-black transition duration-200 rounded-lg p-2 px-4'>
                            <button className="flex flex-row items-center gap-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>


                                <span className='font-semibold text-lg'>Comment</span>
                            </button>
                        </div>


                        {/* save */}
                         <div className='flex gap-4 hover:bg-black transition duration-200 rounded-lg p-2 px-4'>
                            <button className="flex flex-row items-center gap-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>

                                <span className='font-semibold text-lg'>Save</span>
                            </button>
                        </div>
                    </div>

                    
                     {/* Buttons */}
                    <div className='flex gap-3'>
                        <button className="btn btn-outline text-[rgb(30,144,255)] rounded-full drop-shadow-[0_0_15px_rgb(30,144,255)]">
                        APPLY
                        </button>
                         <button className="btn btn-outline text-[rgb(30,144,255)] rounded-full drop-shadow-[0_0_15px_rgb(30,144,255)]">
                        Know More
                        </button>
                    </div>
                   
                </div>
            </div>

            {/* <div className="flex flex-col items-center"> */}
                {/* Profile image */}
                {/* <img
                src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740"
                alt="John Doe"
                className="w-20 h-20 rounded-full object-cover mb-2"
                /> */}


               
                {/* <div className="flex gap-3 mt-2 absolute bottom-[-10rem] right-36">
                <button className="btn btn-outline text-[rgb(30,144,255)] rounded-full drop-shadow-[0_0_15px_rgb(30,144,255)]">
                    APPLY
                </button>
                <button className="btn btn-outline text-[rgb(30,144,255)] rounded-full drop-shadow-[0_0_15px_rgb(30,144,255)]">
                    Know More
                </button>
                </div> */}
            {/* </div> */}
        </div>



    </div>
  )
}

export default ProjectCard