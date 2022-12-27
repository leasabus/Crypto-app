import React from 'react'
import { useParams } from 'react-router-dom'

export const CoinCard = ({ coins }) => {

    const { id } = useParams();

    const getCoinById = (id) => {
        return coins.find(coin => coin.id === id)
    }

    const coin = getCoinById(id)
    return (
        <>


            <h1>{coins.id}</h1>
        </>
    )
}
