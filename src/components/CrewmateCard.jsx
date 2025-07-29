import { Link } from 'react-router-dom'
import './CrewmateCard.css' // Optional: for card styles

const CrewmateCard = ({ crewmate }) => {
  return (
    <div className="crewmate-card">
      <h3>{crewmate.name}</h3>
      <p><strong>Speed:</strong> {crewmate.speed}</p>
      <p><strong>Color:</strong> {crewmate.color}</p>
      <div className="card-actions">
        <Link to={`/edit/${crewmate.id}`}>
          <button>Edit</button>
        </Link>
        <Link to={`/crewmate/${crewmate.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  )
}

export default CrewmateCard
