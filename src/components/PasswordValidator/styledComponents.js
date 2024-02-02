// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #24263c;
`

export const PasswordValidatorContainer = styled.div`
  background: #383a4e;
  height: 400px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`

export const PasswordContainerHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 43px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const PasswordDescription = styled.p`
  color: #f8fafc;
  font-size: 14px;
  font-family: 'Roboto';
`
export const PasswordInputBox = styled.input`
  background-color: #edeeff;
  height: 40px;
  width: 350px;
  border: none;
  outline: none;
  margin-top: 15px;
  padding-left: 10px;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
  font-family: 'Roboto';
  margin-top: 15px;
`
