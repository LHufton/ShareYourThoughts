import { useEffect, useState } from 'react'
import { GetPosts } from '../Services/PostServices'
import { GetComments } from '../Services/CommentServices'
import { useNavigate } from 'react-router-dom'

const Feed = ({ user }) => {
  let navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

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
