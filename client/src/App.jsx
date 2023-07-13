import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Feed from './Components/Feed'
import UserProfile from './pages/UserProfile'
import Nav from './Components/Nav'
import Posts from './Components/Posts'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className='"App'>
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/comments" element={<AllComments />} />
          <Route path="/feed" element={<Feed />} />
        </Router>
      </main>
    </div>
  )
}

export default App
