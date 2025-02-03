import styled from "styled-components";
import BackgroundBanner from "../../assets/Baner-Home.png"
import BackgroundDown from "../../assets/background-patinhas.png"

export const Container = styled.div`
 width: 100vw;
 height: 100vh;
 min-height: 100vh;

 .box-shadow {
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgba(0,0,0,0.5);
 }

  @media(max-width: 1024px) {
    min-height: 100vh;
  }

`

export const ContainerUp = styled.div`
  background-image: url('${BackgroundBanner}');
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content:center;

  h1 {
    z-index: 1;
    font-size: 50px;
    font-family:  "Faculty Glyphic", serif;
    color: #fff;
  }

  
`

export const ContainerDown = styled.div`
  background-image:
  linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255, 255, 255, 0.5)
  ),
   url('${BackgroundDown}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200%;

  @media(max-width: 1024px) {
    height: 100%;
  }

 
`

