import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Feed from './Components/Feed'
import UserProfile from './pages/UserProfile'
import Nav from './Components/Nav'
import Posts from './Components/Posts'
import Home from './Pages/Home'

const App = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/comments" element={<AllComments />} />
      <Route path="/feed" element={<Feed />} />
    </Router>
  )
}

export default App
