import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';
import User from './User';


const Navbar = () => {

    //const navigate = useNavigate()
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: '/',
            title: 'Home',
        },
        {
            id: 2,
            link: '/About',
            title: 'About',
        },
        {
            id: 3,
            link: '/Pages',
            title: 'Pages',
        },
        {
            id: 4,
            link: '/Blog',
            title: 'Blog',
        },

    ]


  return (
    <div className='relative flex justify-between items-center w-full h-20 p-4 bg-white shadow-md md:px-10'>
        <div>
            <h1 className='font-title text-3xl md:text-4xl'>Personal Blog</h1>
        </div>
        <ul className='md:flex hidden'>
            {links.map(({id, link, title}) => (
                <li
                    key={id}
                    className='flex px-6 text-xl font-bold items-center cursor-pointer capitalize hover:scale-105 duration-300'
                >
                    <Link to={link}> {title}</Link>
                </li>
            ))}
        </ul>
        <div className='md:flex hidden items-center cursor-pointer'>
            {/*user ? (
               <div className='absolute bg-white text-black text-xl font-bold' onClick={close}>
                       <h1>Hello</h1>
               </div>
            ) : (<button onClick={() => navigate('/login')} className='font-bold text-xl hover:scale-105 duration-300'>Sign In</button>)*/}
            <User />
        </div>
        <div 
            className='flex md:hidden'
            onClick={() => setNav(!nav)}
        >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

    </div>
  )
}

export default Navbar