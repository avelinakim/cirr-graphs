import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250px;
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
const CheckBox = styled.checkbox

const SingleBootcamp = (props) => {
  return (
    <Container>
      <Left>
        <input type="checkbox" />
      </Left>
      <Right>
        <div>Fullstack Academy</div>
        <div>Program</div>
        <div>City</div>
      </Right>
    </Container>
  )
}

export default SingleBootcamp
