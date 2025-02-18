import styled from "styled-components"


export const Container = styled.div`
   display: flex;
   flex-Direction: column;
   min-height: 100vh;
   height: 300vh;
   

   main {
    flex-grow: 1;
    display: flex;
    flex-Direction: column;
   }

   @media(max-width: 1024px){
      height:200vh;
   }

   @media(max-width: 768px){
      height:250vh;
   }

   @media(max-width: 430px){
      height:190vh;
   }

   @media(max-width: 390px){
      height:200vh;
   }

   @media(max-width: 360px){
      height:220vh;
   }

`