import { useState, useEffect } from 'react'
import { BASE_URL } from '../Services/api'
import axios from 'axios'
import Client from '../Services/api'

const Post = (props) => {
  const [formValues, setFormValues] = useState({ content: '' })
  const [posts, setPosts] = useState([])

  const [editPostContent, setEditPostContent] = useState('')
  const [editingPost, setEditingPost] = useState(null)
  // const [date, setDate] = useState('none')

  // const onDateChange = (e) => {
  //   setDate(e.target.value)
  //   // const newpost = {
  //   //   id: Date.now(),
  //   //   text: e.target.text.value,
  //   //   date: date
  //   // }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formValues)
    // Might need to add '/new' to this path.
    let response = await Client.post('/posts', formValues)
    setPosts([...posts, response.data])
    setFormValues({ content: '' })
  }
  const handleChange = (e) => {
    setFormValues({ ...formValues, content: e.target.value })
  }
  useEffect(() => {
    console.log('Inside UseEffect')
    const getPosts = async () => {
      let response = await axios.get(`${BASE_URL}/posts`)
      console.log(response)
      console.log('should have response')
      setPosts(response.data)
    }
    getPosts()
  }, [])

  const handleChangeEdit = (e) => {
    setEditPostContent(e.target.value)
  }

  const handleEdit = (id) => {
    const postEdit = posts.find((post) => post._id === id)
    setEditPostContent(id)
    setEditingPost(postEdit.content)
  }

  const handledUpdatePost = async (id) => {
    const updatedPost = {
      ...posts.find((post) => post._id === id),
      content: editPostContent
    }
    await Client.put(`/posts/${id}`, updatedPost)
    setPosts(posts.map((post) => (post._id === id ? updatedPost : post)))
    setEditingPost(null)
    setEditPostContent('')
  }

  const handleDeletePost = async (id) => {
    await Client.delete(`/posts/${id}`)
    setPosts(posts.filter((post) => post._id !== id))
  }
  const handleUpdatePost = async (id) => {
    await Client.delete(`/posts/${id}`)
    setPosts(posts.filter((post) => post._id !== id))
  }

  return (
    <div>
      <div className="post-card">
        <h1>Post</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Post text"
            cols={50}
            rows={5}
            onChange={handleChange}
            value={formValues.content}
          />
          <button type="submit">Submit</button>
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
                <button onClick={() => handleUpdatePost(post._id)}>
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
