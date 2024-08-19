import React from 'react'
import Side1 from '../sidebar/Side1'
import Side2 from '../sidebar/Side2'
import Hero from '../HeroSection/Hero'

const RealHome = () => {
  return (    
    <div className='bg-black pt-2 h-[100vh] w-[100vw] flex'>
        <div className="sidebar flex flex-col gap- h-[100%] w-[22%]">
            <Side1/>
            <Side2/>
        </div>
        <div className="heropage h-[99%] flex-1">
            <Hero/>
        </div>
    </div>
  )
}

export default RealHome
