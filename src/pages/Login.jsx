import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        //container
        <div className='w-[300px] md:w-[600px]  mx-auto p-4 bg-slate-200 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            {/* form container */}

            <h2 className='text-3xl font-bold'>Login</h2>
            <form className='mt-4 flex flex-col gap-4 p-2 md:p-6' >
                <p className='font-bold'>Email</p>
                <input className='w-[250px] md:w-[500px] p-2 bg-slate-400 rounded text-black' type="email" placeholder='Your Email' />
                <p className='font-bold'>Password</p>
                <input className='bg-slate-400 w-[250px] md:w-[500px] p-2 rounded text-black' type="password" placeholder='Password' />
                <p className='font-bold'>Remember me</p>
                <button type='submit' className='bg-blue-500 font-bold p-2 mt-4 rounded-xl'>Login</button>
            </form>

            <div className='flex flex-col items-center justify-center mx-auto p-6  w-[250px] md:w-[500px]'>
                <p >Al continuar, acepta los <span className='text-blue-500 font-bold'>Términos de servicio</span> de CryptoData y confirma que ha leído nuestra <span className='text-blue-500 font-bold'>Política de privacidad</span>.</p>
                <p className='mt-4'>Not register yet? <Link to="/signup" className='text-blue-500 font-bold '>Sign up.</Link>  </p>
            </div>

        </div>

    )
}
