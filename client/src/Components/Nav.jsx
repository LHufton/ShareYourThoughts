import { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Comments">Comments</NavLink>
          </li>
          <li>
            <NavLink to="/Posts">Posts</NavLink>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <NavLink to="/SignIn" onClick={handleAuthClick}>
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink to="/Registration">Registration</NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/SignOut" onClick={handleAuthClick}>
                Sign Out
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Nav
