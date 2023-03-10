import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { NavBar } from '../components/NavBar'
import { Login } from '../pages/Login'
import axios from 'axios';
import { SignUp } from '../pages/SignUp'

import { Account } from '../pages/Account'
import { AuthContextProvider } from '../services/AuthContext'


export const AppRoutes = () => {

    const [coins, setCoins] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1&sparkline=true';


    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data)
            // console.log(response.data)
        })
    }, [url])

    return (
        <>
            <AuthContextProvider>
                <NavBar />
                <Routes>
                    <Route path='/*' element={<Home coins={coins} />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                    <Route path='/account' element={<Account />}></Route>
                    {/* ruta anidada */}
                    {/* <Route path='/coinpage/:coinsId' element={<CoinPage />}>
                        <Route path='coinsId' />
                    </Route> */}
                </Routes >
            </AuthContextProvider>

        </>
    )
}
