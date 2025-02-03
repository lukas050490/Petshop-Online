import { Link } from "react-router-dom"
import styled from "styled-components"


export const Container = styled.div`
  padding-left: 10px;
  padding-top: 20px;

  

  
  .carousel-item {
    flex: 1 1 auto;
    width: 400px;
    max-width: 400px;
    margin-right: 5px; 
    margin-left: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    

    
  }

  .react-multiple-carousel__arrow {
   background: green;
  }
`

export const Title = styled.h2`
  font-size: 40px;
  color: green;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: green;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageurl}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 300px;
  border-radius: 20px;


`

export const CategoryButton = styled(Link)`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: bold;
  margin-top: 100px;
  text-decoration: none;
  
  

  &:hover {
    background-color: green;
    opacity: 0.5;
  }
`