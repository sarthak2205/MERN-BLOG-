import React, { useContext, useState } from 'react'

import { Context } from '../../context/Context'

import axios from 'axios'

const CreatePages = () => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState("")
    const [categories, setCategories] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)
 
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {
            username: user.username,
            title,
            categories,
            desc,
            file,
        }

        if(file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)

            newPost.photo = filename

            console.log(filename)
            try {
                const upload = await axios.post("http://localhost:8000/upload", data)
                console.log(upload)
            } catch(error) {
                console.log(error)
            }
        }

        try {
            const res = await axios.post("/posts", newPost)
            window.location.replace("/post/" + res.data._id)
          } catch (error) {}
    }

  return (
    <div className='flex justify-center h-screen w-full p-6 py-10'>
        <div className='bg-white shadow-md rounded-md flex flex-col items-center w-3/4 h-3/4'>
            <form className='flex flex-col w-1/2 justify-center items-center' onSubmit={handleSubmit}>
                <div className='py-5'>
                    <input
                        type='file'
                        className='file:mr-4 file:py-5 file:px-7 file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 cursor-pointer' 
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className='py-5 w-full'>
                    <input 
                        type='text'
                        placeholder='Category'
                        className='border rounded-md py-2 px-4 w-full active:border-indigo-500 hover:scale-105 duration-300 focus:outline-none focus:border-indigo-500 focus:ring-0'
                        onChange={(e) => setCategories(e.target.value)}
                    />
                </div>
                <div className='py-5 w-full'>
                    <input 
                        type='text'
                        placeholder='Title'
                        className='border rounded-md py-2 px-4 w-full active:border-indigo-500 hover:scale-105 duration-300 focus:outline-none focus:border-indigo-500 focus:ring-0'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='py-5 w-full'>
                    <textarea 
                        name=''
                        id=''
                        cols='30'
                        rows='10'
                        placeholder='Description'
                        className='border rounded-md py-2 px-4 w-full active:border-indigo-500 hover:scale-105 duration-300 focus:outline-none focus:border-indigo-500 focus:ring-0'
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className='py-5'>
                    <button type='submit' className='text-white font-bold text-xl bg-indigo-500 py-3 px-5 rounded-full hover:scale-105 duration-300 hover:bg-indigo-400'>Create Post</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreatePages