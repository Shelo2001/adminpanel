import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Piechart from './pages/Piechart'

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/piechart' element={<Piechart />} />
    </Routes>
  </Router>
)

export default App
