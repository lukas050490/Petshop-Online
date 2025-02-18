import styled from "styled-components"

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 20px;
  
  

`

export const Header = styled.thead``

export const Tr = styled.tr``

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  background-color: #484848;
  color: #fff;
  border-bottom: 1px solid #cdcdcd;

  &:last-child {
    border-top-right-radius: 20px;
  }

  &:first-child {
    border-top-left-radius: 20px;
  }

  @media(max-width:430px){
    max-width:120px;
  }
`

export const Td = styled.td`
  padding: 16px;
  color: #484848;
  font-weight: 500;
  line-height: 115%;

  @media(max-width:430px){
    padding: 14px;
  }
`

export const Body = styled.tbody`
   
`