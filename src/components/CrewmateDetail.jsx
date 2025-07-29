import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'
import '../components/CrewmateDetail.css'

const CrewmateDetail = () => {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase.from('crewmates').select('*').eq('id', id).single()
      setCrewmate(data)
    }
    fetchCrewmate()
  }, [id])

  if (!crewmate) return <p>Loading...</p>

return (
  <div className="detail-container">
    <h2>{crewmate.name}</h2>
    <p>Speed: {crewmate.speed}</p>
    <p>Color: {crewmate.color}</p>
    <Link to={`/edit/${crewmate.id}`}>Edit This Crewmate</Link>
  </div>
)
}

export default CrewmateDetail
