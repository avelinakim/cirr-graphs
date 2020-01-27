import React from 'react'
import styled from 'styled-components'
import SingleBootcamp from './SingleBootcamp'

const bootcamps = [
  { id: 0, name: 'Bloc Designer Track' },
  { id: 1, name: 'CodeSmith' },
  { id: 2, name: 'Fullstack' },
  { id: 3, name: 'Fullstack Grace Hopper' },
  { id: 4, name: 'Hack Reactor' },
]

const CampList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  overflow-y: scroll;
  height: 300px;
`

class BootcampsList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Bootcamps</h1>
        <CampList>
          <SingleBootcamp />
          <SingleBootcamp />
          <SingleBootcamp />
          <SingleBootcamp />
          <SingleBootcamp />
          <SingleBootcamp />
          {/* {bootcamps.map((bootcamp) => {
            return (
              <div key={bootcamp.id}>
                <input type="checkbox"></input>
                {bootcamp.name}
              </div>
            )
          })} */}
        </CampList>

        <button>Get Graphs!</button>
      </div>
    )
  }
}

export default BootcampsList
