import React from 'react'
import { BsMoonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        //container

        <div className='flex  justify-between items-center mx-auto w-auto md:w-[950px] p-6 mb-4 mt-2 shadow-xl '>
            <p className='font-bold text-2xl'>CryptoData.</p>
            <div className='hidden md:flex flex-row gap-1 items-center '>
                <BsMoonFill className='text-[#00a8e8]' />
                <p className='font-bold  '>Dark Mode</p>
            </div>
            <div className='flex gap-3 items-center justify-center'>
                <Link to="login"><button className='font-bold text-[#00a8e8]'>Login</button></Link>
                <Link to="signup"><button className='bg-[#00a8e8] text-black font-bold rounded-xl p-1'>Sign Up</button></Link>
            </div>
        </div>


    )
}
