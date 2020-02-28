import React from 'react'
import './App.css'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryTooltip } from 'victory'
import styled from 'styled-components'

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
    const schoolsDataTemplate = [
      { name: 'A', color: '118217' },
      { name: 'B', color: '0914AA' },
      { name: 'C', color: 'AA0000' },
    ]
    const schoolsData = this.props.bootcamps.map((bootcamp, i) => {
      const template = schoolsDataTemplate[i]
      template.school = bootcamp.salaryRanges
      return template
    })

    return (
      <div className="graph">
        <h1>Salary Comparison</h1>
        {this.props.bootcamps.length
          ? this.props.bootcamps.map((bootcamp, i) => (
              <div key={bootcamp.id}>
                {schoolsData[i].name} - {bootcamp.company}: {bootcamp.program}
              </div>
            ))
          : null}
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
                labels={() => 'hello'}
                labelComponent={
                  <VictoryTooltip
                    center={{ x: 225, y: 30 }}
                    pointerOrientation="bottom"
                    flyoutWidth={150}
                    flyoutHeight={50}
                    pointerWidth={150}
                    cornerRadius={0}
                  />
                }
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
