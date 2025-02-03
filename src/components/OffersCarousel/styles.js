import styled from "styled-components"

export const Container = styled.div`
  padding-left: 20px;
  padding-top: 20px;


  .carousel-container{
    height: 600px;
  }


  .carousel-item {
    flex: 1 1 auto;
    width: 350px;
    max-width: 350px;
    padding-right: 10px;
    
    

    .crAViC {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center; 
      width: 100%;
    }

    .cZVmiW {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-right: 0;
      width: 100%;
    }
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

