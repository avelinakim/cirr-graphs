import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Grommet, grommet } from 'grommet'
import Routes from './Routes'
import NavBar from './NavBar'

const App = (props) => {
  return (
    <Router>
      <Grommet theme={grommet}>
        <NavBar />
        <Routes />
      </Grommet>
    </Router>
  )
}

export default App
