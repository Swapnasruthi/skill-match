import React from 'react'

const ProjectCard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="border rounded-xl p-4 flex justify-between items-center shadow-lg w-10/12">
        <div>
            <h2 className="text-xl font-bold mb-2">E-commerce App</h2>
            <p className="text-gray-300 mb-2">responsive web app for online shopping</p>
            <p className="text-sm text-blue-500 mb-4">web App</p>

            <div className="flex items-center gap-3">
            {/* <span className="bg-blue-200 px-3 py-1 rounded-full text-sm">APPLY</span> */}
            <button className='btn btn-outline btn-primary ml-2 mb-2 rounded-full drop-shadow-[0_0_10px_rgb(30,144,255,0.8)]'>APPLY</button>
            <button className='btn btn-outline btn-warning mx-2 mb-2 rounded-full text-[rgb(30,144,255)] drop-shadow-[0_0_15px_rgb(30,144,255)]'>Know More</button>
            

            </div>
        </div>

        <div>
            <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740" alt={name} className="w-24 h-24 rounded-full object-cover" />
        </div>
        </div>


        <div className="border rounded-xl p-4 flex justify-between items-center shadow-lg w-10/12 my-10">
        <div>
            <h2 className="text-xl font-bold mb-2">E-commerce App</h2>
            <p className="text-gray-600 mb-2">responsive web app for online shopping</p>
            <p className="text-sm text-blue-500 mb-4">web App</p>

            <div className="flex items-center gap-3">
            <span className="bg-blue-200 px-3 py-1 rounded-full text-sm">APPLY</span>
            <button className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800">
                Know More
            </button>
            </div>
        </div>

        <div>
            <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740" alt={name} className="w-24 h-24 rounded-full object-cover" />
        </div>
        </div>
    </div>
  )
}

export default ProjectCard