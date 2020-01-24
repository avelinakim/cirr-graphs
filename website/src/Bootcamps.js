import React from 'react'

const bootcamps = [
  { id: 0, name: 'Bloc Designer Track' },
  { id: 1, name: 'CodeSmith' },
  { id: 2, name: 'Fullstack' },
  { id: 3, name: 'Fullstack Grace Hopper' },
  { id: 4, name: 'Hack Reactor' },
]

class Bootcamps extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="bootcampsList">
        <h1> BOOT CAMPS </h1>
        {bootcamps.map((bootcamp) => {
          return (
            <div key={bootcamp.id}>
              <input type="checkbox"></input>
              {bootcamp.name}
            </div>
          )
        })}
        <button>Get Graphs!</button>
      </div>
    )
  }
}

export default Bootcamps
