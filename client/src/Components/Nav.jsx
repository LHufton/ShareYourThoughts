import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions

  if (user) {
    userOptions = (
      <nav className="user-nav-links">
        <h3>Welcome {user.email}!</h3>
        <Link to="/feed">Feed</Link>
        <Link to="/Comments">Comments</Link>
        <Link to="/Posts">Posts</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="public-nav-links">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/auth/google" className="login">
        Log In with Google
      </Link>
    </nav>
  )

  return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
