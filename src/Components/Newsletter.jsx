import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
         <div className='lg:col-span-2'>
            <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p className='pb-4'>Sign up to our newsletter and stay up to</p>
         </div>
         <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
               <input type="email" placeholder="Enter your email" className="p-3  w-full sm:w- rounded-md text-black bg-white mx-2 " />          
                 <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  w-[200px] ml-4 my-6 px-6 py-3 text-black'>Notify Me</button>
          </div>
           <p className='text-center text-gray-500'>We care about the protection of your data. Read our <span className='text-[#00df9a] underline'>Privacy Policy.</span></p>

        </div>
    </div>
    </div>
  )
}

export default Newsletter
