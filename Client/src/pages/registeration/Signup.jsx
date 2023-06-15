import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignupVector from '../../assets/images/SignupVector.jpg'


const Signup = () => {

    const [error, setError] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            })
            res.data && window.location.replace("/login")
        } catch(error) {
            setError(true)
        }
    }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='container bg-white w-3/4 h-3/4 shadow px-10 py-6 flex flex-col md:grid md:grid-cols-2 rounded-md'>
        <div className='w-full flex overflow-hidden'>
          <img 
            src={SignupVector}
            alt="login page"
            className='w-full h-full'
          />
        </div>
        <form 
            className='flex flex-col items-center'
            onSubmit={handleSubmit}    
        >
            <h1 className='text-6xl font-bold py-12 text-blue-500'>
              Sign Up 
            </h1>
            <div className='w-1/2 pb-10'>
              <h1 className='text-xl ml-1 mb-2 font-bold'>Email Address</h1>
              <input 
                type='text'
                className='w-full border border-slate-400 rounded-md py-1 px-3 leading-3 focus:border-blue-600 active:border-blue-600 hover:scale-105 duration-300'
                placeholder='Email Addess'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='w-1/2 pb-10'>
              <h1 className='text-xl ml-1 mb-2 font-bold'>Username</h1>
              <input 
                type='text'
                className='w-full border border-slate-400 rounded-md py-1 px-3 leading-3 focus:border-blue-600 active:border-blue-600 hover:scale-105 duration-300'
                placeholder='Username'
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='w-1/2 pb-10'>
                <h1 className='text-xl ml-1 mb-2 font-bold'>Password</h1>
                <input 
                type='password'
                className='w-full border border-slate-400 rounded-md py-1 px-3 leading-3 focus:border-blue-600 active:border-blue-600 hover:scale-105 duration-300'
                placeholder='Password'
                required
                onChange={(e) => setPassword(e.target.value)}
                />
                <Link to='/Login' className='text-indigo-700 font-bold flex flex-row-reverse hover:underline mt-2'>Log In here</Link>
            </div>

            <button 
                type='submit'
                className='bg-indigo-700 text-white text-xl font-bold flex justify-center items-center rounded-xl py-2 px-5 hover:scale-105 duration-300'
            >
              Register
            </button>
        </form>
        {error && <span>Something went wrong!</span>}
      </div>
    </div>
  )
}

export default Signup