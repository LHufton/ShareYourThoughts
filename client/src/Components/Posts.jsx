import { useState, useEffect } from 'react'
import Client from '../Services/api'
import axios from 'axios'

const Post = (props) => {
  const [formValues, setFormValues] = useState({ content: '' })
  const [posts, setPosts] = useState([])
  const [editingPost, setEditingPost] = useState(null)
  const [editPostContent, setEditPostContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      content: formValues.content
    }
    let response = await Client.post('/posts', newPost)
    setPosts([...posts, response.data])
    setFormValues({ content: '' })
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, content: e.target.value })
  }

  const handleChangeEdit = (e) => {
    setEditPostContent(e.target.value)
  }

  const handleEdit = (id) => {
    const postEdit = posts.find((post) => post._id === id)
    setEditPostContent(postEdit.content)
    setEditingPost(id)
  }

  const handleUpdatePost = async (id) => {
    const updatedPost = {
      ...posts.find((post) => post._id === id),
      content: editPostContent
    }
    console.log('updating post')
    let response = await Client.put(`/posts/${id}`, updatedPost)
    console.log(response)
    setEditingPost(null)
    setEditPostContent('')
  }

  const handleDeletePost = async (id) => {
    await Client.delete(`/posts/${id}`)
    setPosts(posts.filter((post) => post._id !== id))
  }

  useEffect(() => {
    const getPosts = async () => {
      let response = await axios.get(`${Client.defaults.baseURL}/posts`)
      setPosts(response.data)
    }
    getPosts()
  }, [])

  return (
    <div cl>
      <h1>What's on your mind?</h1>
      <div className="post-card">
        <form className="post-content-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Post text"
            cols={15}
            rows={5}
            onChange={handleChange}
            value={formValues.content}
          />
          <button className="post-form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <section className="new-post-card">
        {posts?.map((post) => (
          <div key={post._id}>
            <h4>{post.content}</h4>
            <button onClick={() => handleDeletePost(post._id)}>Delete</button>
            <button onClick={() => handleEdit(post._id)}>Edit</button>
            {editingPost === post._id && (
              <div>
                <textarea
                  placeholder="Edit text"
                  onChange={handleChangeEdit}
                  value={editPostContent}
                />
                <button
                  className="update-post-button"
                  onClick={() => handleUpdatePost(post._id)}
                >
                  Update
                </button>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default Post
