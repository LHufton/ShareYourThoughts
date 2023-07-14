import React from 'react'
import Posts from './components/posts'
import Comments from './components/comments'

const Feed = () => {
  return (
    <div>
      <div className="posts-section">
        <Posts />
      </div>
      <hr />
      <div className="Comments">
        <Comments postId="your_post_id_here" />
      </div>
    </div>
  )
}

export default Feed
