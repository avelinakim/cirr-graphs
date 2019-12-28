import React from 'react'
import logo from './logo.svg'
import './App.css'
import * as d3 from 'd3'

const data = [
  { time: 'At open', items: 24 },
  { time: '11:00 PM', items: 0 },
  { time: '12:00 PM', items: 4 },
]

class App extends React.Component {
  drawLineChart(data) {
    const svgWidth = 800
    const svgHeight = 400

    const svg = d3
      .select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)

    const margin = { top: 20, right: 20, bottom: 30, left: 50 }
    const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    // Create x and y scale
    const width = svgWidth - margin.left - margin.right
    const height = svgHeight - margin.top - margin.bottom

    const y = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.items))
      .range([height, 0])

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.time))
      .range([0, width])

    // Create line
    const itemsLine = d3
      .line()
      .x((d) => x(d.time))
      .y((d) => y(d.items))

    // Append x and y axes to the group g
    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-50)')

    g.append('g')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('fill', '#000')
      .attr('y', -40)
      .attr('x', -180)
      .attr('text-anchor', 'end')
      .text('Items (count)')

    // Append the line as a path to group
    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', itemsLine)

    // Append legend group to svg
    const legend = svg
      .append('g')
      .attr('class', 'legend')
      .attr('x', width - 65)
      .attr('y', 25)
      .attr('height', 100)
      .attr('width', 100)

    legend
      .append('rect')
      .attr('x', width - 65)
      .attr('y', 25)
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', 'red')

    legend
      .append('text')
      .attr('x', width - 50)
      .attr('y', 35)
      .text('Items')
  }
  componentDidMount() {
    this.drawLineChart(data)
  }
  render() {
    return (
      <div className="App">
        <svg id="lineChart"></svg>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
