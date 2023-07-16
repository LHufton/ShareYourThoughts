import { useState } from 'react'
import axios from 'axios'

const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [editingPostId, setEditingPostId] = useState(null)
  const [editedPostText, setEditedPostText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      text: e.target.text.value
    }
    setPosts((prevPosts) => [...prevPosts, newPost])
    e.target.reset()
  }

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))
  }

  const handleEditPost = (postId, postText) => {
    setEditingPostId(postId)
    setEditedPostText(postText)
  }

  const handleUpdatePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, text: editedPostText }
      }
      return Post
    })
    setPosts(updatedPosts)
    setEditingPostId(null)
    setEditedPostText('')
  }

  const handleCancelEdit = () => {
    setEditingPostId(null)
    setEditedPostText('')
  }

  return (
    <div className="Posts">
      <h4>Posts</h4>
      {posts.map((post) => (
        <div key={post.id}>
          {editingPostId === post.id ? (
            <div>
              <textarea
                value={editedPostText}
                onChange={(e) => setEditedPostText(e.target.value)}
              ></textarea>
              <button onClick={() => handleUpdatePost(post.id)}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{post.text}</p>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              <button onClick={() => handleEditPost(post.id, post.text)}>
                Edit
              </button>
            </div>
          )}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          rows={4}
          cols={50}
          placeholder="Enter text."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Posts
