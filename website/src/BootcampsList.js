import React from 'react'
import styled from 'styled-components'
import SingleBootcamp from './SingleBootcamp'

const CampList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
  margin: 10px;
  overflow-y: scroll;
  padding-top: 50px;
  height: 300px;
`

const BootcampsList = (props) => {
  return (
    <div>
      <h1>Bootcamps</h1>
      <CampList>
        {props.bootcamps ? (
          props.bootcamps.map((bootcamp) => (
            <SingleBootcamp key={bootcamp.id} bootcamp={bootcamp} toggleCamp={props.toggleCamp} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </CampList>
    </div>
  )
}

export default BootcampsList
