import styled from "styled-components"



export const Container = styled.div`
  height: 50px;
  background-color: green;
  width: 100vw;

  
  

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    font-size: 16px;
    font-weight: lighter;
  }

  @media(max-width:360px){
    p {
      font-size: 14px;
    }
  }
`