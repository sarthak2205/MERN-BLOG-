import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { Link } from 'react-router-dom'
import { MdOutlineAddPhotoAlternate, MdOutlineLogout } from 'react-icons/md'
import { VscSettingsGear } from 'react-icons/vsc'

const User = () => {

    const { user, dispatch } = useContext(Context)
    const [profileOpen, setProfileOpen ] = useState(false)

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    const close = () => {
        setProfileOpen(!profileOpen)
        console.log(profileOpen)
    }

  return (
    <div className='text-xl text-black font-bold'>
        {user ? (
            <div onClick={close} className='pr-20 w-1/4'>
                <h1 className='relative text-3xl text-indigo-600 font-extrabold hover:underline hover:scale-105 duration-300 w-1/4'> {user.username}</h1>
                {profileOpen && (
                    <div className='absolute flex flex-col justify-center items-start space-y-6 bg-white border border-gray-400 rounded-md z-10 pl-2 py-8 top-20 right-32 w-1/6'>
                        <div className='flex flex-row items-center justify-start hover:bg-sky-100 hover:scale-105 duration-300 w-full py-2 pl-5'>
                            <VscSettingsGear size={30}/> <span className='pl-5'>Account</span>
                        </div>
                        <div className='flex items-center pl-5 hover:bg-sky-100 w-full hover:scale-105 duration-300 py-2'><MdOutlineAddPhotoAlternate size={30}/>
                            <Link className='pl-5' to='/Create'>Create Post</Link>
                        </div>
                        <div className='flex items-center pl-5 hover:bg-sky-100 w-full hover:scale-105 duration-300 py-2'><MdOutlineLogout size={30}/>
                            <button className='pl-5' onClick={handleLogout}>Log Out</button>
                        </div>
                    </div>
                )}
            </div>
        ) : (
            <>
                <Link to='/login'>
                    <button >Login</button>
                </Link>
            </>
        )}
    </div>
  )
}

export default User