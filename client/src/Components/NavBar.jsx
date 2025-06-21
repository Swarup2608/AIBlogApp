import React from 'react'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex items-center justify-between py-3 mx-4 lg:mx-44'>
            <Link to='/' className='flex justify-start items-center gap-4 max-sm:gap-2'>
                <img src={assets.logo} className='w-20 h-20 max-sm:h-10 max-sm:w-10' alt="" />
                <h1 className='text-3xl max-sm:text-lg text-[#23488a] font-semibold'>QuckiBlogg</h1>
            </Link>
            <button className='cursor-pointer bg-[#23488a] text-white px-3 py-2 w-40 max-sm:w-auto rounded-3xl flex justify-center gap-2 hover:scale-105 duration-500 transition-all'  >Login <img src={assets.arrow} alt="" /></button>
        </div>
    )
}

export default NavBar
