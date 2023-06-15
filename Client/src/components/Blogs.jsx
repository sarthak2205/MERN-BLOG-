import React from 'react';

import { Link } from 'react-router-dom';
/* images for blog */
import { blog } from '../assets/data/data';


/* Icons */
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'


const Blogs = () => {

    {/*const handleClick = async ({id}) => {
        const res = await axios.get(`http://localhost:8000/posts/${id}`)
        if(res) {
            window.location.replace(res)
        } else {
            window.location.replace("/")
        }
    }*/}

  return (
    <div 
        className='py-10 min-h-screen w-full flex justify-center px-5'
    >
        <div className='w-full h-screen mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {blog.map(({id, title, desc, category, cover, date}) =>  (
                <div 
                    key={id} 
                    className='container p-4 bg-white rounded-md shadow-md hover:scale-105 duration-300 cursor-pointer flex flex-col items-center'
                >
                        <img 
                            src={cover}
                            className='w-full h-40 md:h-80 rounded-xl'
                            alt=""
                        />
                        <h1 className='font-bold text-xl mt-4 py-2'><Link to={`/posts/${id}`}>{title}</Link></h1>
                        <h2 className='text-xl py-1'>Category: {category}</h2>
                        <p className='py-1 text-sm md:text-md'>{desc.slice(0,180)}...</p>
                    <div className='grid grid-cols-3 items-center justify-center text-left mt-4 '>
                        <div className='pr-5 flex flow-col sm:flex-row items-center'>
                            <AiOutlineClockCircle size={24}/> <p className='md:ml-2 text-xs md:text-base'>{date}</p>
                        </div>
                        <div className='flex px-5 items-center'>
                            <AiOutlineComment size={30}/> <p className='md:ml-2 text-sm md:text-base'>27</p>
                        </div>
                        <div className='flex px-5 items-center'>
                            <AiOutlineShareAlt size={30}/> <p className='md:ml-2 text-sm md:text-base'>Share</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blogs