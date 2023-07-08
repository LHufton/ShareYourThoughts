import { useEffect, useState } from 'react'
import { BASE_URL, API_KEY } from 'react'
import CommentForm from './components/CommentForm'
import Search from './components/Search'
import PostForm from './components/PostForm'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Feed = () => {
  const [comments, setComments] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState([])
  const [searchQuery, setSearchQuery] = useState([])
}

export default Home
