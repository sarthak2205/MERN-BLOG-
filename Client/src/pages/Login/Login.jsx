import React, { useContext, useRef, useState} from 'react'
import { Context } from "../../context/Context"
import loginVector from '../../assets/images/loginVector.jpg' 
import { Link } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

  const userRef = useRef()
  const passRef = useRef()
  const { dispatch, FetchData } = useContext(Context)

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGINSTART"})
    try {
      const res = await axios.post("auth/login",{
        username: userRef.current.value,
        password: passRef.current.value
      })
      dispatch({ type: "LOGINSUCC", payload: res.data })
      window.location.replace("/")
    } catch(error) {
      dispatch({ type: "LOGINFAILED" })
    }
    
  }
  console.log(FetchData)

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='bg-white w-3/4 h-3/4 shadow px-10 py-24 flex flex-col md:grid md:grid-cols-2 rounded-md'>
        <div className='w-full flex justify-center items-center'>
          <img 
            src={loginVector}
            alt="login page"
            className='w-full h-full'
          />
        </div>
        <form 
          className='flex flex-col items-center'
          onSubmit={handleSubmit}
        >
          <h1 className='text-6xl font-bold py-12 text-blue-500'>
            Login
          </h1>
          <div className='w-1/2 pb-12'>
            <h1 className='text-xl ml-1 mb-2 font-bold'>Username</h1>
            <input 
              type='text'
              className='w-full border border-slate-400 rounded-md py-1 px-3 leading-3 focus:border-blue-600 active:border-blue-600 hover:scale-105 duration-300'
              placeholder='Username'
              ref={userRef}
            />
          </div>
          <div className='w-1/2 pb-12'>
              <h1 className='text-xl ml-1 mb-2 font-bold'>Password</h1>
              <input 
              type='password'
              className='w-full border border-slate-400 rounded-md py-1 px-3 leading-3 focus:border-blue-600 active:border-blue-600 hover:scale-105 duration-300'
              placeholder='Password'
              ref={passRef}
              />
              <Link to='/Register' className='text-indigo-700 font-bold flex flex-row-reverse hover:underline mt-2'>Sign Up here</Link>
          </div>
          <button 
            type="submit"
            disabled={FetchData}
            className='bg-indigo-700 text-white text-xl font-bold flex justify-center items-center rounded-xl py-2 px-5 hover:scale-105 duration-300'
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login