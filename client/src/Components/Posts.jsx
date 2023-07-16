import { useState } from 'react'

const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [editedPostId, setEditedPostId] = useState(null)
  const [editedPostText, setEditedPostText] = useState('')
  const [date, setDate] = useState('none')

  const onDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = {
      id: Date.now(),
      text: e.target.text.value
    }

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
    setEditedPostId(postId)
    setEditedPostText(postText)
  }

  const handleUpdatePost = (postId, postText) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, text: editedPostText }
      }
      return Post
    })
    setPosts(updatedPosts)
    setEditedPostId(null)
    setEditedPostText('')
  }

  const handleCancelEdit = () => {
    setEditedPostId(null)
    setEditedPostText('')
  }

  return (
    <div>
      <form className="postDisplay" onSubmit={handleSubmit}>
        <textarea
          name="text"
          rows={5}
          cols={50}
          placeholder="Enter text."
        ></textarea>

        <div>
          <input type="date" value={date} onChange={onDateChange} />
        </div>

        <button className="submitpostButton" type="submit">
          Submit
        </button>
      </form>

      <h2>posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          {editedpostId === post.id ? (
            <div>
              <textarea
                value={editedpostText}
                onChange={(e) => setEditedpostText(e.target.value)}
              ></textarea>
              <button
                className="updatepostButton"
                onClick={() => handleUpdatepost(post.id)}
              >
                Save
              </button>
              <button className="cancelpostButton" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <p>{post.text}</p>
              <button
                className="deletepostButton"
                onClick={() => handleDeletepost(post.id)}
              >
                Delete
              </button>
              <button
                className="EditpostButton"
                onClick={() => handleEditpost(post.id, post.text)}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Posts
