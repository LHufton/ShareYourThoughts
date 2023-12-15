import { useState, useEffect } from 'react'
import Client from '../Services/api'

const Comment = (props) => {
  const [formValues, setFormValues] = useState({ content: '', author: '' })
  const [comments, setComments] = useState([])
  const [editingComment, setEditingComment] = useState(null)
  const [editCommentContent, setEditCommentContent] = useState('')
  const [toggleCommentContent, setToggleCommentContent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = {
      content: formValues.content,
      author: props.user.id
    }
    let response = await Client.post('/comments', newComment)
    setComments([...comments, response.data])
    setFormValues({ content: '' })
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, content: e.target.value })
  }

  const handleChangeEdit = (e) => {
    setEditCommentContent(e.target.value)
  }

  const handleEdit = (id) => {
    const commentEdit = comments.find((comment) => comment._id === id)
    setEditCommentContent(commentEdit.content)
    setEditingComment(id)
  }

  const handleUpdateComment = async (id) => {
    const updatedComment = {
      ...comments.find((comment) => comment._id === id),
      content: editCommentContent
    }
    let response = await Client.put(`/comments/${id}`, updatedComment)
    setComments(
      comments.map((comment) => (comment._id === id ? updatedComment : comment))
    )
    setEditingComment(null)
    setEditCommentContent('')
    setToggleCommentContent((prevToggle) => (prevToggle = !prevToggle))
  }

  const handleDeleteComment = async (id) => {
    await Client.delete(`/comments/${id}`)
    setComments(comments.filter((comment) => comment._id !== id))
  }

  useEffect(() => {
    const getComments = async () => {
      let response = await axios.get(`${Client.defaults.baseURL}/comments`)
      setComments(response.data)
    }
    getComments()
  }, [toggleCommentContent])

  return (
    <div>
      <div className="comment-card">
        <h1>Comment</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            className="comment-text"
            placeholder="Comment text"
            cols={50}
            rows={5}
            onChange={handleChange}
            value={formValues.content}
          />
          <button className="comment-submit-button-" type="submit">
            Submit
          </button>
        </form>
      </div>
      <section className="new-comment-card">
        {comments?.map((comment) => (
          <div key={comment._id}>
            <h4>{comment.content}</h4>
            <button
              className="delete-comment-button"
              onClick={() => handleDeleteComment(comment._id)}
            >
              Delete
            </button>
            <button
              className="edit-text-button"
              onClick={() => handleEdit(comment._id)}
            >
              Edit
            </button>
            {editingComment === comment._id && (
              <div>
                <textarea
                  className="edit-comment-text"
                  placeholder="Edit text"
                  onChange={handleChangeEdit}
                  value={editCommentContent}
                />
                <button onClick={() => handleUpdateComment(comment._id)}>
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

export default Comment
