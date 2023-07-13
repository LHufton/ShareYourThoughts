import { useState, useRef } from 'react'
import { SignInUser } from './services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const [error, setError] = useState(false)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)

    if (!emailRef.current.value || !passwordRef.current.value) {
      setError(true)
    } else {
      setError(false)
      const payload = await SignInUser({
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      setUser(payload)
      navigate('/feed')
    }
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" name="password" />
          </div>
          <button>Sign In</button>
        </form>
        {error ? <div>Invalid entry</div> : null}
      </div>
    </div>
  )
}

export default SignIn
