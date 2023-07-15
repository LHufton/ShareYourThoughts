import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './Services/Auth'
import Nav from './Components/Nav'
import Feed from './Pages/Feed'
import SignIn from './Pages/SignIn'
import Home from './Pages/Home'
import Comments from './Components/Comments'
import Posts from './Components/Posts'
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
          <Route path="/comments" element={<Comments />} />
          <Route path="/posts=" element={<Posts />} />
          <Route path="/SignIn=" element={<SignIn />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
