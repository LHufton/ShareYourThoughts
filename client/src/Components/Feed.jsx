import React from 'react'
import Posts from './Components/Posts'
import Comments from './Components/Comments'

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
