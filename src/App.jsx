import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import CreateCrewmate from './components/CreateCrewmate'
import EditCrewmate from './components/EditCrewmate'
import CrewmateDetail from './components/CrewmateDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />
      </Routes>
    </Router>
  )
}

export default App
