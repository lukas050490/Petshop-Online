import styled from "styled-components";
import BackgroundDown from "../../assets/background-patinhas.png"
import { Link } from "react-router-dom";
import { FaStepBackward } from "react-icons/fa";



export const Container = styled.div`
  width: 100vw;
  height: 100vh;

    background-image:
     linear-gradient(
       rgba(255,255,255,0.5),
       rgba(255,255,255,0.5)
     ),
      url('${BackgroundDown}');
     background-size: cover;
     background-position: center;
     width: 100%;
     height: 100%;

`

export const Banner = styled.div`
  background: radial-gradient(circle, rgba(225,210,29,0.9641981792717087) 0%, rgba(230,124,18,1) 100%);
  width: 100%;
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    height: 400px;
    margin-top: 460px;
  }

  div {
    margin-left: 300px;
    margin-top: 200px;

    h1 {
      font-size: 70px;
      color: #ffffff;
      font-family: 'Road Rage', sans-serif;
    }

    span {
      font-size: 20px;
      color: green;
      font-family: 'Road Rage', sans-serif;
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

  .react-icon {
    width: 30px;

  }
`

export const CategoryButton  = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => props.$isActiveCategory ? 'green' :' #edb62b'};
  font-size: 40px;
  font-weight: 600;
  border-bottom:${(props) => props.$isActiveCategory ? '4px solid #edb62b' : 'none'};
  margin-bottom: 40px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  justify-content: center;
  margin: 50px auto 0;

`

export const IconBack = styled( FaStepBackward)`
  font-size: 40px;
  color: green;
  cursor: pointer;
`