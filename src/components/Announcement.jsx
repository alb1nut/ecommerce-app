import React from 'react'
import styled from "styled-components";

const Container =styled.div`
    
    height:30px;
    background-color: #050;
    color: #fff;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;


const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Delivery on Orders Over Ghc 2,000
    </Container>
  )
}

export default Announcement
