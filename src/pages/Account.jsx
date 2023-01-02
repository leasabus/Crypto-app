import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Account = () => {
    const [coins, setCoins] = useState([]);
    return (
        <div className='w-[950px] mx-auto p-2 rounded shadow-xl'>
            <div className='p-4 shadow-xl'>
                <h2 className='text-2xl font-bold'>Account</h2>
                <div className='flex flex-row items-center justify-between pt-4'>
                    <p>Welcome , <span className='text-blue-500 font-bold'>User.</span></p>
                    <button className='bg-blue-500 p-2 rounded-xl font-bold'>Logout</button>
                </div>
            </div>

            <div className='p-4'>
                <h2 className='text-2xl font-bold'>Wach List</h2>
                {
                    coins.length === 0 ? (
                        <p>
                            You don't have any coins saved. Please save a coin to add it
                            to your coin list. <Link className='font-bold text-blue-500' to="/">Click here to add coins</Link>
                        </p>
                    ) : (
                        <div>
                            <p>Este div tiene q ser como el search</p>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
