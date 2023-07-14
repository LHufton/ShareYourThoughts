import React, { useState } from 'react'

const Comments = (props) => {
  const [comments, setComments] = useState([])
  const [editingCommentId, setEditingCommentId] = useState(null)
  const [editedCommentText, setEditedCommentText] = useState('')

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
    setEditingCommentId(commentId)
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
    setEditingCommentId(null)
    setEditedCommentText('')
  }

  const handleCancelEdit = () => {
    setEditingCommentId(null)
    setEditedCommentText('')
  }

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          {editingCommentId === comment.id ? (
            <div>
              <textarea
                value={editedCommentText}
                onChange={(e) => setEditedCommentText(e.target.value)}
              ></textarea>
              <button onClick={() => handleUpdateComment(comment.id)}>
                Save
              </button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{comment.text}</p>
              <button onClick={() => handleDeleteComment(comment.id)}>
                Delete
              </button>
              <button
                onClick={() => handleEditComment(comment.id, comment.text)}
              >
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

export default Comments
