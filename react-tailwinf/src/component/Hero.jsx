import React from 'react'
import  {ReactTyped}  from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
       <div className=".max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div className='flex  justify-center items-center '>
            <p className='md:text-5xl sm:text-4xl txt-xl font-bold py-4'>fast, flexible financing for </p>
            <ReactTyped
                className=' md:text-5xl sm:text-4xl txt-xl font-bold pl-2 md:pl-4'
                strings={['BTB','BTC', 'SASS']}
                typeSpeed={120}
                backSpeed={150}
                
                loop
    />
   
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor Your Data ANALYTICS to inncrease revenue</p>
        <button>Get Started</button>
       </div>
    </div>
  )
}

export default Hero
