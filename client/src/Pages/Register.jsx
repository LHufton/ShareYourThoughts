import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()

  // State for form values
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // State for error message
  const [errorMessage, setErrorMessage] = useState('')

  // Handle change in form inputs
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    setErrorMessage('') // Reset error message on input change
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formValues.password !== formValues.confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }
    try {
      await RegisterUser({
        name: formValues.name,
        email: formValues.email,
        password: formValues.password
      })
      navigate('/signin')
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data) // Set error message from server response
      } else {
        setErrorMessage('Registration failed. Please try again.')
      }
    }
  }

  // Registration form
  return (
    <div className="signin col">
      <div className="card-overlay centered">
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              !formValues.password ||
              !formValues.confirmPassword ||
              formValues.password !== formValues.confirmPassword
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
