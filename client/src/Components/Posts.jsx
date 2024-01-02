import { useState, useEffect } from 'react'
import Client from '../services/api'

const Post = (props) => {
  const [posts, setPosts] = useState([])
  const [commentContent, setCommentContent] = useState('')

  const fetchPosts = async () => {
    try {
      const fullUrl = Client.defaults.baseURL + '/posts' // Constructing the full URL
      console.log('Full API URL:', fullUrl) // Debug: Log the full API URL

      const response = await Client.get('/posts')
      console.log('API Response:', response.data) // Debug: Log the API response data

      if (Array.isArray(response.data)) {
        setPosts(response.data)
      } else {
        console.error('API did not return an array. Response:', response.data) // Debug: Log an error if not an array
        setPosts([]) // Reset to empty array if response is not an array
      }
    } catch (error) {
      console.error('API call failed:', error) // Debug: Log the API call error
    }
  }

  const handleCommentChange = (e) => {
    setCommentContent(e.target.value)
  }

  const handleCommentSubmit = async (postId) => {
    const newComment = {
      content: commentContent,
      author: props.user.id,
      post: postId
    }
    await Client.post('/comments', newComment)
    setCommentContent('')
    fetchPosts() // Refetch posts to include new comment
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <h1>What's on your mind?</h1>
      {/* ... existing post submission form */}
      <section className="new-post-card">
        {Array.isArray(posts) &&
          posts.map((post) => (
            <div key={post._id}>
              <h4>{post.content}</h4>
              {/* ... existing buttons for delete and edit */}
              {post.comments &&
                post.comments.map((comment) => (
                  <div key={comment._id}>
                    <p>{comment.content}</p>
                  </div>
                ))}
              <textarea
                placeholder="Write a comment..."
                value={commentContent}
                onChange={handleCommentChange}
              />
              <button onClick={() => handleCommentSubmit(post._id)}>
                Submit Comment
              </button>
            </div>
          ))}
      </section>
    </div>
  )
}

export default Post
