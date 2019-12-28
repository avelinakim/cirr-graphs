import React from 'react'
import './App.css'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory'

const techSchool = [
  { salaryRange: [0, 50000], percentage: 18.6 },
  { salaryRange: [50000, 60000], percentage: 49.2 },
  { salaryRange: [60000, 70000], percentage: 27.1 },
  { salaryRange: [70000, 80000], percentage: 3.4 },
  { salaryRange: [80000, 90000], percentage: 0.0 },
  { salaryRange: [90000, 150000], percentage: 1.7 },
]

const codeSchool = [
  { salaryRange: [0, 100000], percentage: 25.0 },
  { salaryRange: [100000, 110000], percentage: 3.1 },
  { salaryRange: [110000, 120000], percentage: 25.0 },
  { salaryRange: [120000, 130000], percentage: 9.4 },
  { salaryRange: [130000, 140000], percentage: 12.5 },
  { salaryRange: [140000, 150000], percentage: 25.0 },
]

const schoolsData = [
  { name: 'codeSchool', school: codeSchool },
  { name: 'techSchool', school: techSchool },
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Victory Tutorial</h1>
        <div style={{ padding: '50px', margin: '50px' }}>
          <VictoryChart theme={VictoryTheme.material} domainPadding={30} padding={60}>
            <VictoryAxis />
            <VictoryAxis
              dependentAxis
              tickValues={[50000, 75000, 100000, 125000, 150000]}
              tickFormat={(tick) => {
                return `$${tick}`
              }}
            />

            <VictoryStack colorScale="heatmap">
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[0].salaryRange[1] - datum.school[0].salaryRange[0]}
              />
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[1].salaryRange[1] - datum.school[1].salaryRange[0]}
              />
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[2].salaryRange[1] - datum.school[2].salaryRange[0]}
              />
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[3].salaryRange[1] - datum.school[3].salaryRange[0]}
              />
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[4].salaryRange[1] - datum.school[4].salaryRange[0]}
              />
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[5].salaryRange[1] - datum.school[5].salaryRange[0]}
              />
            </VictoryStack>
          </VictoryChart>
        </div>
      </div>
    )
  }
}

export default App
