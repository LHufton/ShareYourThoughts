import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Comments = (props) => {
  let navigate = useNavigate()
  const [comments, setComments] = useState([])
  const [editedCommentId, setEditedCommentId] = useState(null)
  const [editedCommentText, setEditedCommentText] = useState('')
  const [date, setDate] = useState('none')

  const onDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newComment = {
      id: Date.now(),
      text: e.target.text.value
    }
    setComments((prevComments) => [...prevComments, newComment])
    e.target.reset()
  }

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    )
  }

  const handleEditComment = (commentId, commentText) => {
    setEditedCommentId(commentId)
    setEditedCommentText(commentText)
  }

  const handleUpdateComment = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, text: editedCommentText }
      }
      return comment
    })
    setComments(updatedComments)
    setEditedCommentId(null)
    setEditedCommentText('')
  }

  const handleCancelEdit = () => {
    setEditedCommentId(null)
    setEditedCommentText('')
  }

  return (
    <div>
      <form className="commentDisplay" onSubmit={handleSubmit}>
        <textarea
          name="text"
          rows={5}
          cols={50}
          placeholder="Enter text."
        ></textarea>

        <div>
          <input type="date" value={date} onChange={onDateChange} />
        </div>

        <button className="submitCommentButton" type="submit">
          Submit
        </button>
      </form>

      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          {editedCommentId === comment.id ? (
            <div>
              <textarea
                value={editedCommentText}
                onChange={(e) => setEditedCommentText(e.target.value)}
              ></textarea>
              <button
                className="updateCommentButton"
                onClick={() => handleUpdateComment(comment.id)}
              >
                Save
              </button>
              <button
                className="cancelCommentButton"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <p>{comment.text}</p>
              <button
                className="deleteCommentButton"
                onClick={() => handleDeleteComment(comment.id)}
              >
                Delete
              </button>
              <button
                className="EditCommentButton"
                onClick={() => handleEditComment(comment.id, comment.text)}
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

export default Comments
