import styled from "styled-components"
import BackgroundDown from "../../assets/background-patinhas.png"

export const Container = styled.div`
  width: 100%;
  background-image:
    linear-gradient(
      rgba(255,255,255,0.5),
      rgba(255,255,255,0.5)
    ),
  url('${BackgroundDown}');
  min-height: 100%;

  @media(max-width:1024px){
    height: 100%;
  }
`

export const Banner = styled.div`
  background: linear-gradient(251deg, rgba(225,210,29,0.9641981792717087) 0%, rgba(218,149,53,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 500px;

  img {
    height: 350px;
    width: 350px;
    border-radius: 50%;
  }
`

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: green;
  text-align: center;
  position: relative;


  &::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: "";
    width: 56px;
    height: 4px;
    background-color: green;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
  gap: 40px;

  @media(max-width:820px){
    display: flex;
    flex-direction: column;
  }

  @media(max-width: 430px) {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    width: 100%;
    padding: 0;
  }
`