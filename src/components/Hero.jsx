import React from 'react'
import pic from '../assets/resume_pic.png'
import { TypeAnimation } from 'react-type-animation'


const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px]  h-[70vh] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
        <img className='rounded-full' src={pic} alt="profile_pic" />

      </div>

      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold' >
          <span className='primary-color'>
            I'm a
          </span><br />
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "FUll Stack Developer",
              1000,
              "Website Designer",
              1000
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />

        </h1>


      </div>
    </div>
  )
}

export default Hero