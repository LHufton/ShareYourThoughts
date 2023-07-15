import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div>
      <h1> Welcome home!</h1>
      <h2> What would you like to talk about?</h2>
      <section className="welcome-signin">
        <button onClick={() => navigate('signin')}>Let's go!</button>
      </section>
    </div>
  )
}

export default Home
