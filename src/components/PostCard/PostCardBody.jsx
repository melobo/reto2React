import React from 'react'

function PostCardBody (props) {
  return (
    <div className='card-body'>
      <h5 className='card-title'>
        <p>{props.name}</p>
      </h5>
      <p className='card-text center-text'>
        <p>Autor:{props.login}</p>

      </p>
      <div className='d-flex justify-content-between align-items-center'>
        {props.createdAt}
        <small className='text-muted'>
          {props.updatedAt}
        </small>
      </div>
    </div>
  )
}

export default PostCardBody
