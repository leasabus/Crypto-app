// import React from 'react';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Sparklines, SparklinesLine } from 'react-sparklines';
// import { useParams } from 'react-router-dom';


// export const CoinPage = () => {
//     const [coins, setCoins] = useState([])
//     const { coinsId } = useParams();


//     const url = `https://api.coingecko.com/api/v3/coins/${coinsId}?localization=false&sparkline=true`;

//     useEffect(() => {
//         axios.get(url).then((response) => {
//             setCoins(response.data)
//             console.log(response.data)
//         })


//     }, [url])



//     return (

//         <div className='w-[950px] mx-auto flex flex-col items-start justify-center p-1'>

//             <p className='p-1 m-2 bg-blue-500 rounded-xl text-white'>Rank #{coins.coingecko_rank}</p>
//             <div className='flex flex-row items-center  '>
//                 <p className='text-3xl  p-2 font-bold' >{coins.name}</p>
//                 <p className='text-xl'>({coins.symbol})</p>
//             </div>

//             <img src={coins.image?.large} width={84} alt="/" className='p-2' />
//             <p className='font-bold mt-2 text-xl p-2'>Price: {coins.market_data?.current_price.usd.toLocaleString()}U$D</p>
//             <div className='flex justify-between gap-6 mt-4 p-2'>
//                 <div >
//                     <p className='font-bold'><span className='text-blue-500'>Market capitalization:</span> {coins.market_data?.market_cap.usd.toLocaleString()} U$D</p>
//                     <p className='font-bold'><span className='text-blue-500'>Market capitalization in 24hs:</span> {coins.market_data?.market_cap_change_24h.toLocaleString()} U$D</p>

//                 </div>

//                 <div>
//                     <p className='font-bold'> <span className='text-blue-500'>Total Supply:</span> {coins.market_data?.max_supply.toLocaleString()}</p>
//                     <p className='font-bold'><span className='text-blue-500'>Total Volume:</span> {coins.market_data?.total_volume.usd.toLocaleString()} USD</p>
//                 </div>

//             </div>

//             <p className='text-2xl font-bold mt-4 p-2'>Sparkline in the last 7 days</p>
//             <Sparklines data={coins.market_data?.sparkline_7d.price}>
//                 <SparklinesLine color="teal" />
//             </Sparklines>

//             <p className='text-2xl font-bold mt-6'>History of the coin</p>
//             <p className='mt-4 text-start' >{coins.description?.en.slice(0, 934)}</p>

//         </div>
//     )
// }
