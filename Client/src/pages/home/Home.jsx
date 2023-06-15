import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner';
import Blogs from '../../components/Blogs';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import Cards from '../../components/Cards';

const Home = () => {
  const [posts, setPosts] = useState([])

    const { search } = useLocation()

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
        }
        fetchPost()
    }, [search])

  return (
    <div className='w-full min-h-screen'>
        <Banner />
        {/*<Blogs />*/}
        <Cards posts={posts}/>
    </div>
  )
}

export default Home