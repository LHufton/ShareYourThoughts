import { useEffect, useState } from 'react'
import { GetPosts } from '../Services/PostServices'
import Comments from '../Components/Comments'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const handlePosts = async () => {
      const data = await GetPosts()
      setPosts(data)
    }
    handlePosts()
  }, [])

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
