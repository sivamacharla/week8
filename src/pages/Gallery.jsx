import { useEffect, useState } from 'react'
import { supabase } from '../client'
import { Link } from 'react-router-dom'
import '../pages/Gallery.css'

const Gallery = () => {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false })
      if (!error) setCrewmates(data)
    }
    fetchData()
  }, [])

  return (
    <div>
  <h2>Your Crewmate Gallery!</h2>
  <div className="gallery-container">
    {crewmates.map(c => (
      <div className="crewmate-card" key={c.id}>
        <h3>{c.name}</h3>
        <p>Speed: {c.speed}</p>
        <p>Color: {c.color}</p>
        <Link to={`/edit/${c.id}`}>Edit</Link> | 
        <Link to={`/crewmate/${c.id}`}>Details</Link>
      </div>
    ))}
  </div>
</div>
  )
}

export default Gallery
