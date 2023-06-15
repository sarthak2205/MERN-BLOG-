import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { Context } from '../../context/Context'

const DetailsPage = () => {    
    const location = useLocation()
    console.log(location)
    const path = location.pathname.split("/")[2]

    const [ update, setUpdate ] = useState(false)
    const [ desc, setDesc ] = useState("")
    const [ title, setTitle ] = useState("")
     
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async() => {
            const res = await axios.get("/posts/" + path)
            console.log(res)
            setPost(res.data)
        }
        getPost()
    }, [path])

    const PublicFlo = "http://localhost:8000/images/"
    const { user } = useContext(Context)


    const handleUpdate = async () => {
      try {
        await axios.put(`/posts/${post._id}`, { username: user.username, title, desc })
        window.location.reload()
      } catch (error) {}
    }

    const handleDelete = async () => {
      try {
        await axios.delete(`/posts/${post._id}`, { data : {username: user.username} })
        window.location.replace('/')
      } catch(error){}
    }
  return (
    <div className='hscreen w-full px-6 py-10'>
      <div className='bg-white shadow-md rounded-md p-6 w-full flex flex-col justify-center space-y-10'>
        <div>
          {post.username == user?.username && (
            <div className='flex items-center space-x-8'>
              <button onClick={() => setUpdate(true)} className='text-yellow-400 hover:scale-105 duration-300'>
                <BsPencilSquare size={20}/>
              </button>
              <button className='text-red-600 hover:scale-105 duration-300' onClick={handleDelete}>
                <AiOutlineDelete size={20} />
              </button>
              {update && (
                <button onClick={handleUpdate} className='text-emerald-400 hover:scale-105 duration-300'>
                  Update
                </button>
              )}
            </div>
          )}
        </div>
        <div className='w-full p-5 flex justify-center'>
          {post.photo && <img src={PublicFlo + post.photo} alt=''/>}
        </div>
        <div className='flex flex-row items-center justify-center'>
          {update ? <input className='ml-5 px-2 py-2 rounded-md focus:ring-0 hover:scale-105 duration-300 border focus:border-indigo-500 active:border-indigo-500 w-3/4 placeholder:font-bold placeholder:text-xl' type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='TITLE'/> : <h1 className='pl-2 font-bold text-2xl'>{post.title}</h1>}
        </div>
        <div className='flex flex-row items-center justify-center'>
        {update ? <input className='ml-5 px-2 py-2 rounded-md focus:ring-0 hover:scale-105 duration-300 border focus:border-indigo-500 active:border-indigo-500 w-3/4' type='text' value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description'/> : <h1 className='xl'>{post.desc}</h1>}
        </div>
        <div>
          <span>Author: <Link to={`/?user=${post.username}`} className='text-indigo-500 font-bold pl-5'>{post.username}</Link></span>
        </div>
      </div>      
    </div>
  )
}

export default DetailsPage