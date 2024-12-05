import React from 'react'
//import pictures inside this file
//put the pics here
import proj1 from '../assets/melano_bag.png';
import proj2 from '../assets/user_manager.webp';
import proj3 from '../assets/blog_template.webp';
import proj4 from '../assets/ai_trip_planner.png';


const Work = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-5' id='work'>
            <div className='pb-8'>
                <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
                <p className='text-gray-400'>Check out some of my recent work</p>
            </div>



            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                    <img src={proj1} alt="project1" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider '>Melano Bag Store</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/RAHUL-THITA-235/melano" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Explore
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                    <img src={proj2} alt="project2" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider '>User Manager</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/RAHUL-THITA-235/user-manager" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Explore
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                    <img src={proj3} alt="project3" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider '>Responsive Blog App</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/RAHUL-THITA-235/crud-blog-web-app" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Explore
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                    <img src={proj4} alt="project4" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider '>Trip Planner AI Chatbot</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Soumyajit1209/Trip_Planner_AI" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Explore
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default Work;

