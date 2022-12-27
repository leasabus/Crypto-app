import React from 'react'
import { Search } from '../pages/Search'
import { TrendingCoins } from '../pages/TrendingCoins'
import { CoinCard } from './CoinCard'
import { Footer } from './Footer'

export const Home = ({ coins }) => {
    return (
        <>
            <Search coins={coins} />
            <TrendingCoins />
            <CoinCard coins={coins} />
            <Footer />
        </>

    )
}
