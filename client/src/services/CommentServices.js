import Client from './api'

export const GetComments = async () => {
  try {
    const res = await Client.get('/comments')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComments = async () => {
  try {
    const res = await Client.post('/comments')
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateComments = async () => {
  try {
    const res = await Client.put('/comments')
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComments = async () => {
  try {
    const res = await Client.delete('/comments')
    return res.data
  } catch (error) {
    throw error
  }
}
