import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Graph from './Graph'
import Bootcamps from './Bootcamps'

const Routes = (props) => (
  <Switch>
    <Route path="/graph">
      <Graph />
    </Route>
    <Route path="/">
      <Bootcamps />
    </Route>
  </Switch>
)

export default Routes
