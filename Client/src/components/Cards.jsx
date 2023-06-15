import React, { useEffect } from 'react'
import { blog } from '../assets/data/data'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'

const Cards = ({ posts }) => {

    const PublicFlo = "http://localhost:8000/images/"

    useEffect(() => {
        console.log(posts)
    })


  return (
    <div 
    className='py-10 w-full flex justify-center px-5'
>
    <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {posts.map((item) =>  (
            <div 
                key={item.id} 
                className='container p-4 bg-white rounded-md shadow-md hover:scale-105 duration-300 cursor-pointer flex flex-col items-center justify-start'
            >
                    {item.photo && (
                        <img 
                        src={PublicFlo + item.photo}
                        className='w-full h-40 md:h-80 rounded-xl'
                        alt=""
                    />
                    )}
                        
                    <h1 className='font-bold text-xl mt-4 py-2'><Link to={`/posts/${item._id}`}>{item.title}</Link></h1>
                    <Link className='text-xl text-indigo-500 hover:scale:105 duration-300 hover:font-bold'>{item.categories}</Link>
                    <p className='py-1 text-sm md:text-md text-slate-500 h-16'>{item.desc.slice(0,180)}...</p>
                <div className='grid grid-cols-3 items-center justify-center text-left mt-4 '>
                    <div className='pr-5 flex flow-col sm:flex-row items-center'>
                        <AiOutlineClockCircle size={24}/> <p className='md:ml-2 text-xs md:text-base text-slate-500'>{new Date(item.createdAt).toDateString().replace(/^\S+\s/,'')}</p>
                    </div>
                    <div className='flex px-5 items-center'>
                        <AiOutlineComment size={30}/> <p className='md:ml-2 text-sm md:text-base text-slate-500'>27</p>
                    </div>
                    <div className='flex px-5 items-center'>
                        <AiOutlineShareAlt size={30}/> <p className='md:ml-2 text-sm md:text-base text-slate-500'>Share</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Cards