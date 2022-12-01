import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Piechart from './pages/Piechart'
import CreateUser from './pages/CreateUser'

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/piechart' element={<Piechart />} />
      <Route path='/createuser' element={<CreateUser />} />
    </Routes>
  </Router>
)

export default App
