import React from 'react'
import Posts from './Posts'
import Comments from './Comments'

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
