import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Feed">Feed</Link>
          </li>
          <li>
            <Link to="/Posts">Posts</Link>
          </li>
          <li>
            <Link to="/Comments">Comments</Link>
          </li>
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
      </nav>
    </header>
  )
}

export default Nav
