import React from 'react'
import  styled from "@emotion/styled"

const Container = styled.div`
    padding: 70px;
`;

const Likes :React.FC  = () => {
  return (
    <Container>
      <h2> Liked Videos</h2>
    </Container>
  )
}

export default Likes