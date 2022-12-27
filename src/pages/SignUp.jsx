import React from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
    return (

        <div className='w-[300px] md:w-[600px]  mx-auto p-4 bg-slate-200 rounded-xl shadow-xl flex flex-col items-center justify-center '>
            <div className='flex flex-col  text-center  mx-auto p-6 w-[250px] md:w-[500px]'>
                <p className='text-2xl font-bold'>It's free!. Easily keep track of your favorite coins with CryptoData.</p>
                <p className='mt-2'>By continuing, you agree to the CryptoData <span className='text-blue-500 font-bold'>Terms of Service</span> and confirm that you have read our <span className='text-blue-500 font-bold'>Privacy Policy</span>.</p>
            </div>
            <h2 className='text-3xl font-bold'>Sign Up</h2>
            <form className='mt-4 flex flex-col gap-4 p-6'>
                <input className='w-[250px] md:w-[500px] p-2 bg-slate-400 rounded text-black' type="email" placeholder='Email' />
                <input className='w-[250px] md:w-[500px] p-2 bg-slate-400 rounded text-black' type="password" placeholder='Password' />
                <button className='bg-blue-500 font-bold p-2 mt-4 rounded-xl'>Sign Up</button>
            </form>
            <p>You have an account? <Link to="/login" className='text-blue-500 font-bold'>Login.</Link></p>
        </div>
    )
}
