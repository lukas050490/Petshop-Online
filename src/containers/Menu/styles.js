import styled from "styled-components";
import BackgroundDown from "../../assets/background-patinhas.png"
import { Link } from "react-router-dom";
import { FaStepBackward } from "react-icons/fa";



export const Container = styled.div`
  width: 100%;
  height: 100vh;


  background-image:
    linear-gradient(
      rgba(255,255,255,0.5),
      rgba(255,255,255,0.5)
    ),
    url('${BackgroundDown}');
  background-size: cover;
  background-position: center;
  min-height: 280%;
  min-width: 100%;

  @media(max-width: 1024px){
    min-height: 200%;
  }

  @media(max-width: 820px){
    min-height: 220%;
  }

  @media(max-width: 768px){
    min-height: 340%;
  }

  @media(max-width: 430px){
    max-width: 100%;
    overflow-x: hidden;
  }

`

export const Banner = styled.div`
  background: radial-gradient(circle, rgba(225,210,29,0.9641981792717087) 0%, rgba(230,124,18,1) 100%);
  width: 100%;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  img{
    height: 400px;
    margin-top: 258px;
  }

  div {
    margin-left: 50px;
    margin-top: 200px;

    h1 {
      font-size: 40px;
      color: #ffffff;
      font-family: 'Road Rage', sans-serif;
    }

    span {
      font-size: 20px;
      color: green;
      font-family: 'Road Rage', sans-serif;
    }
  }
  @media(max-width:1024px) {

    img{
      height: 200px;
      margin-top: 335px;
    }
    div {
      margin-left: 20px;

      h1 {
        font-size: 40px;
      }
    }
  }

  @media (max-width: 430px) {
    img{
      height: 100px;
      margin-top: 363px;
    }

    div{
      h1{
        font-size: 30px;
      }
    }
  }

  @media (max-width: 390px) {

    div{
      h1{
        font-size: 20px;
      }
    }
  }

  @media (max-width: 360px) {
    img{
      height: 80px;
      margin-top: 370px;
    }
  }



`

export const CategoryMenu = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 70px;


  @media(max-width: 430px) {
    gap: 10px;
    padding-left: 0;
    justify-content: center;
    
  }
`

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => props.$isActiveCategory ? 'green' : ' #edb62b'};
  font-size: 40px;
  font-weight: 600;
  border-bottom:${(props) => props.$isActiveCategory ? '4px solid #edb62b' : 'none'};
  margin-bottom: 40px;

  @media(max-width: 768px) {
    font-size: 30px; 
  }

  @media(max-width: 430px) {
    font-size: 20px;
    margin-bottom: 60px;
  }

  @media(max-width: 360px) {
    font-size: 17px; 
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  justify-content: center;
  margin: 50px auto 0;
  

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`

export const IconBack = styled(FaStepBackward)`
  font-size: 40px;
  color: green;
  cursor: pointer;

  @media(max-width: 390px) {
    font-size: 30px; 
  }
`