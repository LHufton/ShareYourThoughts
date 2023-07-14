import Client from './api'

export const UserSignIn = async (data) => {
  try {
    const res = await Client.post('./auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}
export default Client