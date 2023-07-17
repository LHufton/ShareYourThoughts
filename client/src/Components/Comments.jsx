import { useState, useEffect } from 'react'
import { BASE_URL } from '../Services/api'
import axios from 'axios'
import Client from '../Services/api'

const Comment = (props) => {
  const [formValues, setFormValues] = useState({ body: '' })
  const [comments, setComments] = useState([])
  // const [date, setDate] = useState('none')

  // const onDateChange = (e) => {
  //   setDate(e.target.value)
  // }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // const newComment = {
    //   id: Date.now(),
    //   text: e.target.text.value
    //   date: date
    let response = await Client.post('/comments/new', formValues)
    setComments([...comments, response.data])
    setFormValues({ body: '' })
  }
  const handleChange = (e) => {
    setFormValues({ body: e.target.value })
  }
  useEffect(() => {
    const getComments = async () => {
      let response = await axios.get(`${BASE_URL}/comments/all`)
      setComments(response.data)
    }
    getComments()
  }, [])

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    )
  }

  const handleUpdateComment = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, text: editedCommentText }
      }
      return comment
    })
    setComments(updatedComments)
  }

  const { user } = props
  return user ? (
    <div>
      <div>Comments Page</div>
      <form className="commentDisplay" onSubmit={handleSubmit}>
        <textarea
          name="text"
          rows={5}
          cols={50}
          placeholder="Enter text."
        ></textarea>

        {/* <div>
          <input type="date" value={date} onChange={onDateChange} />
        </div> */}

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
  ) : null
}

export default Comments
