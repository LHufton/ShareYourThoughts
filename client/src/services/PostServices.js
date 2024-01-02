import Client from './api'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreatePost = async (postData) => {
  try {
    const res = await Client.post('/posts', postData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePost = async (postId, updateData) => {
  try {
    const res = await Client.put(`/posts/${postId}`, updateData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeletePost = async (postId) => {
  try {
    const res = await Client.delete(`/posts/${postId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
