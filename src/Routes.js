import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Graph from './Graph'

const Routes = (props) => (
  <Switch>
    <Route path="/Graph">
      <Graph />
    </Route>
  </Switch>
)

export default Routes
