import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageurl}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 60%;
  height: 200px;
  border-radius: 20px;

  
`

export const ContainerPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  width: 100%;
  

  p {
    font-size: 20px;
    margin-top: 10px;
    bottom: 5px;
    color:  #edb62b;
  }

  strong {
    font-size: 26px;
  }


`



