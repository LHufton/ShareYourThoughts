import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="HomeContainer">
      <h1 className="homeH1"> Welcome home!</h1>
      <h2 className="homeh2"> What's on your mind?</h2>
      <section className="welcome-signin">
        <button onClick={() => navigate('signin')}>Let's go!</button>
      </section>
    </div>
  )
}

export default Home
