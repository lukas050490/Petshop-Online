import styled from "styled-components"
import ReactSelect from "react-select"
import Button from "../../../components/Button"




export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Form = styled.form`
  border-radius: 20px;
  background-color: #000;
  padding: 32px;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Label = styled.label`
  color: #fff;
  font-size: 14px;
`

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  padding: 0 12px;
  border: none;
`

export const LabelUpload = styled.div`
  cursor: pointer;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 20px 0;

  > svg {
    width: 20px;
    height: 20px;
    fill: #fff;
    margin-right: 4px;
  }

  input {
    display: none;
  }
`

export const Select = styled(ReactSelect)``

export const SubmitButton = styled(Button)`
  margin-top: 40px;
`

export const ErrorMessage = styled.span`
  color: #ff3205;
  line-height: 80%;
  font-size: 14px;
  font-weight: 600;
`

export const ContainerCheckBox= styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  input {
    cursor: pointer;
  }
`