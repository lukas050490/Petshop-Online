import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";
import BackgroundLeft from "../../assets/background3.png"


export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content:center;

  @media (max-width: 870px) {
    flex-direction: column;
    
  }
`


export const LeftContainer = styled.div`
   background: linear-gradient(251deg, rgba(225,210,29,0.9641981792717087) 0%, rgba(218,149,53,1) 100%);
   background-position: center;
   background-size: cover;

   height: 100%;
   width: 100%;
   max-width: 50%;

   display: flex;
   align-items: center;
   justify-content: center;

   img {
    height: 400px;
    border-radius: 50%;

    @media (max-width: 870px) {
      height: 300px;
    }
   }
  @media (max-width: 870px) {
    max-width: 100%;
  }
   

   
`

export const RightContainer = styled.div`
  background-image: url('${BackgroundLeft}');

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;
  padding-left: 10px;

  @media (max-width: 870px) {
   padding: 16px;
   max-width: 100%;
  }

`

export const Title = styled.h2`
  font-family: "Faculty Glyphic", serif;

  
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;

  span {
   color: #edb62b;
  }

  @media (max-width: 870px) {
    font-size: 30px;
    margin-left: 50px;
  }
`

export const FormContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 padding: 20px;
 width: 100%;
 max-width: 400px;


 p{
   color: #ffffff;
   font-size: 20px;
   font-weight: 800;
   margin-top: 20px;
  }


`

export const InputForm = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 20px;

  label{
   color: #ffffff;
   font-size:20px;
   font-weight: 600;
   margin-bottom: 5px;
  }

  input {
   width: 100%;
   height: 50px;
   padding: 0 16px;
   border-radius: 5px;
   border: none;

   font-size: 20px;
  }

  p{
    font-size: 16px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
  }

`

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #ffffff;
`


