import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div``

const Buthold = styled.div`
     background-color: black;
     color: white;
     border-radius: 10px;
     padding: 10px;
     cursor: pointer;
     :hover{
      background-color: white;
      color: black;
     }

`;

interface Iprops{
  text: string;
  


}

const Button:React.FC  <Iprops>  = ({text}) => {
  return (
    <Container>
        <Buthold>
          { text }
        </Buthold>

    </Container>
  )
}

export default Button