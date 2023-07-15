import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <header>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Comments">Comments</Link>
          </li>
          <li>
            <Link to="/Posts">Posts</Link>
          </li>
          <li>
            <Link to="/Feed">Feed</Link>
          </li>
          {/* Ternary function that checks whether the user is logged in. */}
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/SignIn" onClick={handleAuthClick}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/SignOut" onClick={handleAuthClick}>
                Sign Out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Nav
