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
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState([])
}

const handleChange = (event) => {
  setSearchQuery(event.target.value)
}
return (
  <div>
    <div className="search">
      <Search
        value={searchQuery}
        onChange={handleChange}
        onSubmit={getSearchResults}
      />
      <h2>Search Results</h2>
      <section className="search-results container">
        {searched &&
          searchResults.map((result) => (
            <Link to={`/comments/details/${result.id}`} key={result.id}></Link>
          ))}
      </section>
    </div>
  </div>
)
export default Home
