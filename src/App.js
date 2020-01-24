import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import NavBar from './NavBar'

const App = (props) => {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  )
}

export default App
