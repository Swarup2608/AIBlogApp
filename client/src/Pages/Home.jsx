import React from 'react'
import { assets } from '../assets/assets'
import Blogs from '../Components/Blogs'
import CTA from '../Components/CTA'

const Home = () => {
  return (
    <>
      <div className='flex justify-end items-center gap-5 text-center flex-col w-full min-h-[300px] px-2'>
        <p className='flex justify-center items-center gap-2 bg-violet-200 px-4 py-2 w-[300px] rounded-4xl border-2 border-violet-300 text-violet-800'>New AI Feature integrated <img src={assets.star_icon} alt="" /></p>
        <h1 className='text-center text-5xl font-bold mt-3'>Your own <span className='text-[#23488a]'>blogging</span> <br className='max-sm:hidden' /> platform</h1>
        <p className='text-md text-gray-600'>This is your space think out loud, to share what matters, and to write without filters. Whether <br /> it's one word or a thousand, your story starts right here.</p>
      </div>
      <Blogs />
      <CTA />
    </>
  )
}

export default Home
