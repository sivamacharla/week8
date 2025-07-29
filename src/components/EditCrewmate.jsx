import { useEffect, useState } from 'react'
import { supabase } from '../client'
import { useParams, useNavigate } from 'react-router-dom'
import '../components/EditCrewmate.css'

const EditCrewmate = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [crewmate, setCrewmate] = useState({ name: '', speed: '', color: '' })

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase.from('crewmates').select('*').eq('id', id).single()
      setCrewmate(data)
    }
    fetchCrewmate()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setCrewmate(prev => ({ ...prev, [name]: value }))
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const { error } = await supabase
      .from('crewmates')
      .update(crewmate)
      .eq('id', id)
    if (error) alert('Error updating crewmate')
    else navigate('/gallery')
  }

  const handleDelete = async () => {
    await supabase.from('crewmates').delete().eq('id', id)
    navigate('/gallery')
  }

return (
  <form className="edit-form" onSubmit={handleUpdate}>
    <input name="name" value={crewmate.name} onChange={handleChange} required />
    
    <select name="speed" value={crewmate.speed} onChange={handleChange} required>
      <option value="">Select Speed</option>
      <option value="Fast">Fast</option>
      <option value="Slow">Slow</option>
    </select>
    
    <select name="color" value={crewmate.color} onChange={handleChange} required>
      <option value="">Select Color</option>
      <option value="Red">Red</option>
      <option value="Green">Green</option>
      <option value="Blue">Blue</option>
    </select>
    
    <button type="submit">Update Crewmate</button>
    <button type="button" onClick={handleDelete}>Delete Crewmate</button>
  </form>
)
}

export default EditCrewmate
