import React, { useState, useEffect } from 'react'
import axios from 'axios';


export const TrendingCoins = () => {
    const [coins, setCoins] = useState([])

    // const url = 'https://api.coingecko.com/api/v3/search/trending';

    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setCoins(response.data)
    //         // console.log(response.data)
    //     })

    // }, [url])

    console.log(coins)

    return (
        <div className=' mx-auto w-auto md:w-[950px] p-4 mt-4 shadow-xl'>
            <h2 className='text-2xl hidden sm:flex font-semibold'>Trending Coins</h2>
            <p>Top 7 trending coins in the last 24 hours</p>
            {/* map */}
            <div>
                {
                    // coins.map((coin) => (
                    //     <div key={coin.id}>
                    //         <p>{coin.name}</p>
                    //     </div>
                    // ))
                }
            </div>
        </div>
    )
}
