import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    navigate('/home')
  }

  const handleGoogleLogin = async () => {
    try {
      const response = await fetch('/auth/google', {
        method: 'GET'
      })

      if (response.ok) {
        window.location.href = response.url
      } else {
        console.error('Error initiating Google OAuth')
      }
    } catch (error) {
      console.error('Error initiating Google OAuth', error)
    }
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper-email">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper-password">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
        <div className="google-login">
          <button onClick={handleGoogleLogin}>Sign In with Google</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
