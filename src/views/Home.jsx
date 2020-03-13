import React, { useState, useEffect } from 'react'

import PostList from '../components/PostList'
import api from '../lib/api'

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    async function getPosts() {
      const payload = await api.getPosts()
      if (posts.length !== payload.data.posts.length) setPosts(payload.data.posts)
    }

    getPosts()

  }, [posts])

  return <PostList list={posts} />

}

export default Home
