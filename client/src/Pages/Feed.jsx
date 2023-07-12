import React from 'react'
import Posts from './posts'
import Comments from './comments'

const Feed = () => {
  return (
    <div>
      <Posts />
      <hr />
      <Comments postId="your_post_id_here" />
    </div>
  )
}

export default Feed
