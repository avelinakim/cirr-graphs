import React from 'react'
import styled from 'styled-components'
import Bootcamps from './BootcampsList'
import Graph from './Graph'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const testBootcamps = [
  {
    id: 1,
    company: 'CodeSmith LLC',
    program: 'Fullstack Academy',
    location: 'New York City, New York',
    median: 80,
    salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
  },
  {
    id: 2,
    company: 'Fullstack Academy, Inc.',
    program: 'Fullstack',
    location: 'Chicago',
    median: 80,
    salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
  },
  {
    id: 3,
    company: 'Fullstack Academy Inc.',
    program: 'The Grace Hopper Web Development Immersive',
    location: 'New York City',
    median: 80,
    salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
  },
  {
    id: 4,
    company: 'Fullstack Academy Inc.',
    program: 'Fullstack Academy',
    location: 'New York City, New York',
    median: 80,
    salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
  },
]

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bootcamps: testBootcamps, selectedCamps: [] }
    this.toggleCamp = this.toggleCamp.bind(this)
  }
  toggleCamp(bootcamp, e) {
    // e.preventDefault()
    // TODO: check boxes yourself
    // console.log(e)
    const id = bootcamp.id
    const selected = this.state.selectedCamps
    const index = selected.findIndex((currBootcamp) => currBootcamp.id === id)
    if (index === -1) {
      if (selected.length === 3) {
        console.log('Too many!')
        return
      }
      // TODO: use SetState
      selected.push(bootcamp)
    } else {
      this.state.selectedCamps = [...selected.slice(0, index), ...selected.slice(index + 1)]
    }
    console.log('SelectedCamps:', this.state.selectedCamps)
  }
  render() {
    return (
      <div>
        <Title>Best Bootcamp</Title>
        <Container>
          <Bootcamps bootcamps={this.state.bootcamps} toggleCamp={this.toggleCamp} />
          <Graph bootcamps={this.state.selectedCamps} />
        </Container>
      </div>
    )
  }
}

export default Home

// const testBootcamps = {
//   1: {
//     company: 'Fullstack Academy, Inc.',
//     program: 'Fullstack',
//     location: 'Chicago',
//     median: 80,
//     salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
//   },
//   2: {
//     company: 'Fullstack Academy Inc.',
//     program: 'The Grace Hopper Web Development Immersive',
//     location: 'New York City',
//     median: 80,
//     salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
//   },
//   3: {
//     company: 'Fullstack Academy Inc.',
//     program: 'Fullstack Academy',
//     location: 'New York City, New York',
//     median: 80,
//     salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
//   },
// }
