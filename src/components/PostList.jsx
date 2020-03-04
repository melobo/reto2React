import React from 'react'

import PostCard from '../components/PostCard'
import PostCardButtons from '../components/PostCard/PostCardButtons'

function PostList (props) {
  return (
    <div className='row'>
      {
        props.list.map((post, index) => (
          <div
            key={post.id || `post-${index}`}
            className='col-md-4'
          >
            <PostCard
              name={post.name}
              login={post.login}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
              img={post.img}
            >
              <PostCardButtons
                edit={post.edit}
                view={post.view}
              />
            </PostCard>
          </div>
        ))
      }
    </div>
  )
}

export default PostList
