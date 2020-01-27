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

const testBootcamps = {
  1: {
    company: 'Fullstack Academy, Inc.',
    program: 'Fullstack',
    location: 'Chicago',
    median: 80,
    salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
  },
  2: {
    company: 'Fullstack Academy Inc.',
    program: 'The Grace Hopper Web Development Immersive',
    location: 'New York City',
    median: 80,
    salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
  },
  3: {
    company: 'Fullstack Academy Inc.',
    program: 'Fullstack Academy',
    location: 'New York City, New York',
    median: 80,
    salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
  },
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedCamps: [] }
  }
  render() {
    return (
      <div>
        <Title>Best Bootcamp</Title>
        <Container>
          <Bootcamps />
          <Graph />
        </Container>
      </div>
    )
  }
}

export default Home
