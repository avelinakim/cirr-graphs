import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 480px;
  padding: 5px;
  margin: 5px;
`
const Left = styled.section`
  flex: 1;
`
const Right = styled.section`
  flex: 3;
  // display: flex;
`
// const CheckBox = styled.checkbox

const SingleBootcamp = (props) => {
  return (
    <Container>
      <Left>
        <input type="checkbox" onClick={(e) => props.toggleCamp(props.bootcamp, e)} />
      </Left>
      <Right>
        <div>{props.bootcamp.company}</div>
        <div>{props.bootcamp.program}</div>
        <div>{props.bootcamp.location}</div>
      </Right>
    </Container>
  )
}

export default SingleBootcamp
