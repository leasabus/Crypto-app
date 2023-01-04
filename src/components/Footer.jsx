import React from 'react'
import { BsMoonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='mx-auto p-4 shadow-xl flex items-center justify-between w-[950px] bg-slate-300 rounded'>
            <div className='flex items-center justify-around gap-8'>

                <div className='flex flex-col'>
                    <h2 className='font-bold text-lg text-blue-600'>Support</h2>
                    <a href='https://www.coingecko.com/es/faq' target="_blank">Help Center</a>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfpIPMsCvVokn7l6OpjJmJoYRxvpArYpO4rvcps-0XQxLQ7DQ/viewform' target="_blank">Contact Us</a>
                    <a href='https://www.coingecko.com/es/api' target="_blank">Api Status</a>
                    <a href='https://www.coingecko.com/es/api/documentation' target="_blank">Documentation</a>
                </div>

                <div className='flex flex-col'>
                    <h2 className='font-bold text-lg text-blue-600'>Info</h2>
                    <a href='https://www.coingecko.com/es/informacion' target="_blank">About Us</a>
                    <a href='https://www.coingecko.com/es/careers' target="_blank">Carrers</a>
                    <a href='https://www.coingecko.com/es/news' target="_blank">News</a>
                    <a href='https://www.coingecko.com/es/intimidad' target="_blank">Legal</a>
                </div>

            </div>

            <div className=''>
                <div className='flex flex-row gap-2 text-center items-center mb-2'>
                    <BsMoonFill className='text-blue-500' />
                    <button className='font-bold' >Dark Mode </button>
                </div>
                <p className='mb-2'>Sign up for crypto news</p>
                <div className='flex gap-2'>
                    <input className='p-2 bg-slate-300 rounded' type="email" placeholder='Enter your email' />
                    <Link to='signup'> <button className='bg-blue-400 p-2 rounded'>Sign Up</button> </Link>
                </div>
            </div>
        </div>
    )
}
