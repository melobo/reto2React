import React from 'react'

import PostCardBackground from './PostCardBackground'
import PostCardBody from './PostCardBody'

function PostCard (props) {
  return (
    <div className='card mb-4 shadow-sm'>
      <PostCardBackground
        img={props.img}
      />

      <PostCardBody
        name={props.name}
        login={props.login}
        createdAt={props.createdAt}
        updatedAt={props.updatedAt}
      >
        {props.children}
      </PostCardBody>
    </div>
  )
}

export default PostCard
