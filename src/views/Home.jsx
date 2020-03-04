import React, { Component } from 'react'

import AppLoading from '../components/AppLoading'
import PostList from '../components/PostList'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount () {
    setInterval(async () => {
      this.setState({
        loading: true
      })


      const response = await window.fetch('https://api.github.com/users/kodemia/repos')

      const payload = await response.json()

      const posts = payload.map((badPost) => ({
        name: badPost.name,
        login: badPost.owner.login,
        createdAt: badPost.created_at,
        updatedAt: badPost.updated_at,
        img: badPost.owner.avatar_url
      }))

      this.setState({
        posts,
        loading: false
      })
    }, 2000)
  }

  render () {


    return <PostList list={this.state.posts} />
  }
}

export default Home
