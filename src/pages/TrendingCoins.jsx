import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaBitcoin } from 'react-icons/fa'


export const TrendingCoins = () => {
    const [trending, setTrending] = useState([])

    const url = 'https://api.coingecko.com/api/v3/search/trending';

    useEffect(() => {
        axios.get(url).then((response) => {
            setTrending(response.data.coins)
            console.log(response.data.coins)

        })

    }, [url])



    return (
        <div className=' mx-auto w-auto md:w-[950px] p-6 mt-4 shadow-xl mb-10 '>
            <h2 className='md:text-3xl text-2xl  font-semibold'>Trending Coins</h2>
            <p>Top 7 trending coins in the last 24 hours.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
                {
                    trending.map((coin, ids) => (
                        <div key={ids} className="flex flex-col items-center  mt-6 bg-slate-200 rounded-xl shadow-xl p-2 w-[170px] md:w-[250px] h-[250px] hover:translate-y-2 transition-all shadow-slate-400">
                            <p className='text-blue-500 p-2 text-xl'>{coin.item.score + 1}º</p>
                            <img className='rounded-full p-1' src={coin.item.small} alt="" width={60} />
                            <p className='font-bold'>{coin.item.id.toUpperCase()}</p>
                            <p className='bg-blue-500 text-white rounded w-14 text-center mt-4 '>{coin.item.symbol}</p>
                            <div className='flex flex-col md:flex-row items-center justify-center gap-2 mt-4'>
                                <p  >Price: {coin.item.price_btc.toFixed(10)} </p>
                                <FaBitcoin width={24} className='text-orange-500' />
                            </div>

                        </div>
                    ))
                }
            </div>


        </div>
    )
}
