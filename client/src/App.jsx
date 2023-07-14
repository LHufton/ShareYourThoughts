import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import React from 'react'
import Feed from './Pages/Feed'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import './App.css'

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
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
