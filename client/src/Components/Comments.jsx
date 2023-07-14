import React, { useState } from 'react'

const Comments = (props) => {
  const [comments, setComments] = useState([])
  const [editCommentId, setUpdateCommentId] = useState(null)
  const [editedCommentText, seteditedCommentText] = useState('')

  const handleAddComment = (newComment) => {
    setComments(prev)
  }
}
