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
    company: 'Bloc',
    program: 'Web Developer Track',
    location: 'Online',
    median: 60000,
    salaryRanges: [
      { salaryRange: [0, 50000], percentage: 27.0 },
      { salaryRange: [50000, 60000], percentage: 13.5 },
      { salaryRange: [60000, 70000], percentage: 27.0 },
      { salaryRange: [70000, 80000], percentage: 5.4 },
      { salaryRange: [80000, 90000], percentage: 13.5 },
      { salaryRange: [90000, 150000], percentage: 13.5 },
    ],
  },
  {
    id: 2,
    company: 'Bottega',
    program: 'Full-stack Python & React',
    location: 'Salt Lake City',
    median: 46380,
    salaryRanges: [
      { salaryRange: [0, 40000], percentage: 14.8 },
      { salaryRange: [40000, 50000], percentage: 44.4 },
      { salaryRange: [50000, 60000], percentage: 37.0 },
      { salaryRange: [60000, 70000], percentage: 3.7 },
      { salaryRange: [70000, 80000], percentage: 0.0 },
      { salaryRange: [80000, 90000], percentage: 0.0 },
    ],
  },
  {
    id: 3,
    company: 'Tech Elevator',
    program: 'Full-Stack Software Development',
    location: 'Cleveland',
    median: 55000,
    salaryRanges: [
      { salaryRange: [0, 50000], percentage: 18.6 },
      { salaryRange: [50000, 60000], percentage: 49.2 },
      { salaryRange: [60000, 70000], percentage: 27.1 },
      { salaryRange: [70000, 80000], percentage: 3.4 },
      { salaryRange: [80000, 90000], percentage: 0.0 },
      { salaryRange: [90000, 150000], percentage: 1.7 },
    ],
  },
  {
    id: 4,
    company: 'Fullstack Academy',
    program: 'The Grace Hopper Web Development Immersive',
    location: 'New York City',
    median: 90000,
    salaryRanges: [
      { salaryRange: [0, 60000], percentage: 10.1 },
      { salaryRange: [60000, 70000], percentage: 4.3 },
      { salaryRange: [70000, 80000], percentage: 17.4 },
      { salaryRange: [80000, 90000], percentage: 13.0 },
      { salaryRange: [90000, 100000], percentage: 20.3 },
      { salaryRange: [100000, 150000], percentage: 34.8 },
    ],
  },
  {
    id: 5,
    company: 'Fullstack Academy',
    program: 'Fullstack Academy',
    location: 'New York City',
    median: 90000,
    salaryRanges: [
      { salaryRange: [0, 60000], percentage: 15.7 },
      { salaryRange: [60000, 70000], percentage: 2.4 },
      { salaryRange: [70000, 80000], percentage: 9.6 },
      { salaryRange: [80000, 90000], percentage: 19.3 },
      { salaryRange: [90000, 100000], percentage: 14.5 },
      { salaryRange: [100000, 150000], percentage: 38.6 },
    ],
  },
  {
    id: 6,
    company: 'Codesmith',
    program: 'Full-Stack Web Development',
    location: 'New York City',
    median: 112500,
    salaryRanges: [
      { salaryRange: [0, 100000], percentage: 25.0 },
      { salaryRange: [100000, 110000], percentage: 3.1 },
      { salaryRange: [110000, 120000], percentage: 25.0 },
      { salaryRange: [120000, 130000], percentage: 9.4 },
      { salaryRange: [130000, 140000], percentage: 12.5 },
      { salaryRange: [140000, 150000], percentage: 25.0 },
    ],
  },
  {
    id: 7,
    company: 'Galvanize (Hack Reactor)',
    program: 'Full-Stack Web Development',
    location: 'New York City',
    median: 95000,
    salaryRanges: [
      { salaryRange: [0, 90000], percentage: 30.2 },
      { salaryRange: [90000, 100000], percentage: 27.9 },
      { salaryRange: [100000, 110000], percentage: 23.3 },
      { salaryRange: [110000, 120000], percentage: 7.0 },
      { salaryRange: [120000, 130000], percentage: 2.3 },
      { salaryRange: [130000, 150000], percentage: 9.3 },
    ],
  },
  {
    id: 8,
    company: 'Thinkful',
    program: 'Online',
    location: 'Flexible Web Development',
    median: 62000,
    salaryRanges: [
      { salaryRange: [0, 50000], percentage: 20.8 },
      { salaryRange: [50000, 60000], percentage: 22.2 },
      { salaryRange: [60000, 70000], percentage: 20.8 },
      { salaryRange: [70000, 80000], percentage: 8.3 },
      { salaryRange: [80000, 90000], percentage: 4.2 },
      { salaryRange: [90000, 150000], percentage: 2.8 },
    ],
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
      selected.push(bootcamp)
      this.setState({ bootcamps: this.state.bootcamps, selectedCamps: selected })
    } else {
      this.setState({
        bootcamps: this.state.bootcamps,
        selectedCamps: [...selected.slice(0, index), ...selected.slice(index + 1)],
      })
    }
  }
  render() {
    return (
      <div>
        <Title>Best Bootcamp</Title>
        <Container>
          <Bootcamps bootcamps={this.state.bootcamps} toggleCamp={this.toggleCamp} />
          {this.state.selectedCamps.length === 0 ? null : <Graph bootcamps={this.state.selectedCamps} />}
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

// const testBootcamps = [
//   {
//     id: 1,
//     company: 'CodeSmith LLC',
//     program: 'Fullstack Academy',
//     location: 'New York City, New York',
//     median: 80,
//     salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
//   },
//   {
//     id: 2,
//     company: 'Fullstack Academy, Inc.',
//     program: 'Fullstack',
//     location: 'Chicago',
//     median: 80,
//     salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
//   },
//   {
//     id: 3,
//     company: 'Fullstack Academy Inc.',
//     program: 'The Grace Hopper Web Development Immersive',
//     location: 'New York City',
//     median: 80,
//     salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
//   },
//   {
//     id: 4,
//     company: 'Fullstack Academy Inc.',
//     program: 'Fullstack Academy',
//     location: 'New York City, New York',
//     median: 80,
//     salaryRanges: [{ salaryRange: [0, 50000], percentage: 18.6 }, {}, {}, {}, {}, {}],
//   },
// ]
