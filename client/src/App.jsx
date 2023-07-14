import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import Feed from './Components/Feed'
import { Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Posts from './Components/Posts'
import Comments from './Components/Comments'
import Home from './Pages/Home'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  return (
    <div className='"App'>
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
