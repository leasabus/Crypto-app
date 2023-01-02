import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines';




export const Search = ({ coins }) => {
    //state para manejar la busqueda de coins
    const [search, setSearch] = useState('')


    return (
        <div className=' mx-auto w-auto md:w-[950px] p-4  shadow-xl bg-slate-200 rounded'>
            <div className='flex justify-between items-center '>
                <h2 className='text-2xl hidden sm:flex font-semibold'>Search Coin</h2>

                <div className='flex flex-row items-center gap-2 text-slate-500'>
                    <BsSearch />
                    <form >
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            className='bg-slate-300 text-black rounded px-2 py-1'
                            type="text"
                            placeholder='Search a coin' />
                    </form>
                </div>
            </div>




            <div className='flex items-center text-center justify-around gap-4 p-2 w-auto md:w-[900px] h-auto border-collapse font-bold'   >

                <div className='flex flex-row gap-2 md:gap-6 items-center justify-center'>
                    <p className='px-4'>#</p>
                    <p className='text-left'>Coin</p>
                </div>
                {/* <div className='flex flex-row gap-6  ml-4 md:ml-20 w-24 text-center'>
                </div> */}
                <p className='ml-8 md:ml-24' >Price</p>
                <p className='md:ml-4'>24h</p>
                <p className='hidden md:flex mr-10'>24h Volume</p>
                <p className='hidden md:flex mr-4'>Mkt</p>
                <p className='hidden md:flex'>Last 7 Days</p>


            </div>



            {
                coins.filter((value) => {
                    //si no se busca nada devolvemos el value por defecto
                    if (search === '') {
                        return value
                    } else if (
                        value.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                        return value;
                    }
                })
                    .map((coin) => (

                        <div
                            className='flex items-center text-center justify-around gap-4 p-2 w-auto md:w-[900px] h-auto border-collapse'
                            key={coin.id}>
                            <div className='flex flex-row gap-2 md:gap-6 items-center justify-center'>
                                <AiOutlineStar className='w-8' />
                                <p>{coin.market_cap_rank}</p>
                                <img src={coin.image} alt={coin.name} className="w-6 md:w-8 mr-1 md:mr-2 rounded-full items-center text-center " />
                                <Link to='/coin'><button

                                    className='bg-blue-600 text-white rounded-full p-1  w-12  text-center text-sm md:text-md '>{coin.symbol.toUpperCase()}</button>
                                </Link>
                            </div>
                            {/* <div className='flex flex-row gap-4 md:gap-6 mr-0 md:mr-6 w-24 text-center'>
                                </div> */}
                            <p className='p-4 text-center w-[130px] ' >{coin.current_price.toFixed(2)} US$</p>
                            <p className='p-1 text-green-600 w-[50px] items-center text-center justify-center mx-0' >
                                {coin.price_change_percentage_24h.toFixed(2)}
                            </p>


                            <p className='hidden md:flex text-center w-[150px]'>{coin.total_volume} US$</p>
                            <p className='hidden md:flex text-center w-[150px]'>{coin.market_cap} US$</p>
                            <div className='w-24'>
                                <Sparklines data={[16865.679924348886, 16862.520948313442, 16840.16651774838, 16836.402019038687, 16818.749629565693, 16841.011497434578, 16841.16468121544, 16823.19653988069]}>
                                    <SparklinesLine color="blue" />
                                </Sparklines>
                            </div>


                        </div>
                    ))
            }

        </div>
    )
}
