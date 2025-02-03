import styled from "styled-components"
import Select from "react-select"

export const ProductImage = styled.img`
  height: 60px;
  padding: 12px;
  border-radius: 16px;
`

export const SelectStatus = styled(Select)`
  width: 240px;
`

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;
`

export const FilterOptions = styled.button`
  color: ${(props) => props.$isActiveStatus ? "green" : "#625e5e"};
  background: none;
  border: none;
  border-bottom: ${(props) => props.$isActiveStatus ? "1px solid green" : "none"};
  cursor: pointer;
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
`