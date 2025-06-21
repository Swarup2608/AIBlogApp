import React from 'react'

const CTA = () => {
  return (
    <div className='min-h-[400px] w-full px-5 py-2 flex flex-col justify-center items-center text-center'>
      <h1 className='text-4xl font-bold mb-3'>Never Miss a Blog!</h1>
      <p className='text-xl text-gray-500 mb-2' >Subscribe to get latest blog, tech news, and exclusive news</p>
      <div className='flex flex-row max-sm:flex-col w-[70%] lg:w-[50%] max-sm:w-[100%] justify-center items-center' >
        <input type="email" className='border border-gray-300 px-6 py-3 w-full rounded-l-lg outline-none max-sm:rounded-l-none' placeholder='Enter your email id' />
        <button className='bg-[#23488a] py-3 px-16 text-white border border-[#23488a] cursor-pointer max-sm:w-full max-sm:mt-2 hover:bg-[#23318a]'>Subscribe</button>
      </div>
    </div>
  )
}

export default CTA
