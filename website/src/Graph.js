import React from 'react'
import './App.css'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory'

const tech = [
  { salaryRange: [0, 50000], percentage: 18.6 },
  { salaryRange: [50000, 60000], percentage: 49.2 },
  { salaryRange: [60000, 70000], percentage: 27.1 },
  { salaryRange: [70000, 80000], percentage: 3.4 },
  { salaryRange: [80000, 90000], percentage: 0.0 },
  { salaryRange: [90000, 150000], percentage: 1.7 },
]

const grace = [
  { salaryRange: [0, 60000], percentage: 10.1 },
  { salaryRange: [60000, 70000], percentage: 4.3 },
  { salaryRange: [70000, 80000], percentage: 17.4 },
  { salaryRange: [80000, 90000], percentage: 13.0 },
  { salaryRange: [90000, 100000], percentage: 20.3 },
  { salaryRange: [100000, 150000], percentage: 34.8 },
]

const code = [
  { salaryRange: [0, 100000], percentage: 25.0 },
  { salaryRange: [100000, 110000], percentage: 3.1 },
  { salaryRange: [110000, 120000], percentage: 25.0 },
  { salaryRange: [120000, 130000], percentage: 9.4 },
  { salaryRange: [130000, 140000], percentage: 12.5 },
  { salaryRange: [140000, 150000], percentage: 25.0 },
]

const schoolsData = [
  { name: 'code', school: code, color: '118217' },
  { name: 'tech', school: tech, color: '0914AA' },
  { name: 'grace', school: grace, color: 'AA0000' },
]

const LightenColor = function(color, percent) {
  const num = parseInt(color, 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const B = ((num >> 8) & 0x00ff) + amt
  const G = (num & 0x0000ff) + amt

  return (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1)
}

const pickColor = function(datum, rangeIndex) {
  let percentage = datum.school[rangeIndex].percentage

  const color = datum.color
  if (percentage <= 5) percentage = 80
  else if (percentage <= 10) percentage = 67
  else if (percentage <= 15) percentage = 44
  else if (percentage <= 20 && percentage < 25) percentage = 22
  else percentage = 1

  // console.log('rangeIndex', rangeIndex, 'TCL: pickColor -> percentage', percentage)
  return LightenColor(color, percentage)
}

class Graph extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Victory Tutorial</h1>
        <div style={{ padding: '15px', margin: '15px' }}>
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
                style={{
                  data: {
                    fill: ({ datum }) => pickColor(datum, 0),
                  },
                }}
              />
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[1].salaryRange[1] - datum.school[1].salaryRange[0]}
                style={{
                  data: {
                    fill: ({ datum }) => pickColor(datum, 1),
                  },
                }}
              />
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[2].salaryRange[1] - datum.school[2].salaryRange[0]}
                style={{
                  data: {
                    fill: ({ datum }) => pickColor(datum, 2),
                  },
                }}
              />
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[3].salaryRange[1] - datum.school[3].salaryRange[0]}
                style={{
                  data: {
                    fill: ({ datum }) => pickColor(datum, 3),
                  },
                }}
              />
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[4].salaryRange[1] - datum.school[4].salaryRange[0]}
                style={{
                  data: {
                    fill: ({ datum }) => pickColor(datum, 4),
                  },
                }}
              />
              <VictoryBar
                data={schoolsData}
                x="name"
                y={(datum) => datum.school[5].salaryRange[1] - datum.school[5].salaryRange[0]}
                style={{
                  data: {
                    fill: ({ datum }) => pickColor(datum, 5),
                  },
                }}
              />
            </VictoryStack>
          </VictoryChart>
        </div>
      </div>
    )
  }
}

export default Graph
