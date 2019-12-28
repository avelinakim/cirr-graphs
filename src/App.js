import React from 'react'
import logo from './logo.svg'
import './App.css'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Victory Tutorial</h1>
        <VictoryChart theme={VictoryTheme.material} domainPadding={30}>
          <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']} />
          <VictoryAxis dependentAxis tickFormat={(tick) => `$${tick / 1000}k`} />
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </div>
    )
  }
}

export default App
