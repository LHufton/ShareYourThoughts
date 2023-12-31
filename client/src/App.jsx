const { useState, useEffect } = require('react')
const { Routes, Route } = require('react-router-dom')
const { CheckSession } = require('./Services/UserServices')
const Nav = require('./Components/Nav')
const Feed = require('./Components/Feed')
const Register = require('./Pages/Register')
const SignIn = require('./Pages/SignIn')
const Home = require('./Pages/Home')
const Comments = require('./Components/Comments')
const Posts = require('./Components/Posts')
require('./App.css')

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

  const [themeMode, setThemeMode] = useState('light')

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(themeMode)
  }, [themeMode])

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setThemeMode(storedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  return (
    <div className={`App ${themeMode}`}>
      <header></header>
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <button className="darkButton" onClick={toggleTheme}>
          Light/Dark Mode
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/comments" element={<Comments user={user} />} />
          <Route path="/feed" element={<Feed user={user} />} />
          <Route path="/posts" element={<Posts user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
