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
    }

`

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
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
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Logout = styled.button`
  color: #ff3205;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  background-color: transparent;
  border: none;
`