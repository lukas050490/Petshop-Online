import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  z-index: 2;
  position: fixed;
  padding: 5px 20px;

  background:#ffffff10;
  border: 2px solid #ffffff30;
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  
 

`
export const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;

    @media (max-width: 500px){
      width: 50px;
      height: 50px;
      margin-left: 50px;
    }

    @media(max-width: 430px){
      margin-left: 10px;
    }

`

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media(max-width:430px) {
    justify-content: space-around;

    gap: 10px;
  }
`

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;

  div {
    margin-left: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media(max-width: 430px){
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-left: 10px;
      gap: 5px;

      div{
        gap:5px;
      }
    }
  }
`

export const HeaderLink = styled(Link)`
   text-decoration: none;
   color: ${(props) => props.$isActive ? "green" : "#fff"};
   font-size: 28px;
   transition: color 200ms;

  &:hover {
    color: green;
  }

  @media(max-width:430px) {
    font-size: 20px;
  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;

  @media(max-width: 430px) {
    gap: 10px;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 28px;

  div {
    margin-top: 30px;
  }

  p {
    color: #fff;
    line-height: 90%;
    font-weight: 300;

    span {
      font-weight: 700;
      color: green;
     
    }
  }

  @media(max-width: 430px){
    display: flex;
    align-itens: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    font-size: 18px;

    div {
      margin-top: 0;
    }

  }

`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media(max-width: 430px){
    display: flex;
    flex-direction: column;
   }
`

export const Logout = styled.button`
  color: #ff3205;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  background-color: transparent;
  border: none;

  @media(max-width: 430px) {
    font-size: 16px;
  }
`