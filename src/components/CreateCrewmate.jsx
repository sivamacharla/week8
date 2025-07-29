import { useState } from 'react'
import { supabase } from '../client'
import { useNavigate } from 'react-router-dom'
import '../components/CreateCrewmate.css'
const CreateCrewmate = () => {
  const [crewmate, setCrewmate] = useState({ name: '', speed: '', color: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCrewmate(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase
      .from('crewmates')
      .insert([
        {
          name: crewmate.name,
          speed: crewmate.speed,
          color: crewmate.color
        }
      ])

    if (error) {
      console.error("Insert Error:", error)
      alert("Failed to create crewmate")
    } else {
      alert("Crewmate created!")
      navigate('/gallery') // go back to gallery or home
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={crewmate.name}
        onChange={handleChange}
        required
      />
      <select name="speed" value={crewmate.speed} onChange={handleChange} required>
        <option value="">Select Speed</option>
        <option value="Fast">Fast</option>
        <option value="Slow">Slow</option>
      </select>
      <select name="color" value={crewmate.color} onChange={handleChange} required>
        <option value="">Select Color</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <button type="submit">Create Crewmate</button>
    </form>
  )
}

export default CreateCrewmate
