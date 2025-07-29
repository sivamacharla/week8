import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Crewmate Creator!</h1>
      <p>
        Here’s where you can create your very own set of crewmates before sending them off on a mission!
      </p>
      <div className="home-buttons">
        <Link to="/create">
          <button>Create a Crewmate</button>
        </Link>
        <Link to="/gallery">
          <button>View Gallery</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
