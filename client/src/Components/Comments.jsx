import { useState, useEffect } from 'react'
import { BASE_URL } from '../Services/api'
import axios from 'axios'
import Client from '../Services/api'

const Comment = (props) => {
  const [formValues, setFormValues] = useState({ content: '' })
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
    console.log(formValues)
    let response = await Client.post('/comments', formValues)
    setComments([...comments, response.data])
    setFormValues({ content: '' })
  }
  const handleChange = (e) => {
    setFormValues({ content: e.target.value })
  }

  useEffect(() => {
    console.log('insideUseEffect')
    const getComments = async () => {
      let response = await axios.get(`${BASE_URL}/comments`)
      console.log(response)
      console.log('should have response')
      setComments(response.data)
    }
    getComments()
  }, [])

  const handleDeleteComment = async (id) => {
    await Client.delete(`/comments/${id}`)
    setComments(comments.filter((comment) => comment._id !== id))
  }

  return (
    <div>
      <div className="comment-card">
        <h1>Comment</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="content"
            cols={50}
            rows={5}
            onChange={handleChange}
            value={formValues.content}
          />

          <button type="submit">Send It</button>
        </form>
      </div>
      <section className="new-comment-card">
        {comments?.map((comment) => (
          <div key={comment._id}>
            <h4>{comment.content}</h4>
            <button onClick={() => handleDeleteComment(comment._id)}>
              Delete Comment
            </button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Comment
