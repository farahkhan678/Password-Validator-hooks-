// Write your code here
import {useState} from 'react'
import {
  Container,
  PasswordValidatorContainer,
  PasswordContainerHeading,
  ErrorMessage,
  PasswordDescription,
  PasswordInputBox,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, onChangeUserInput] = useState('')

  const onEnterUserPassword = event => onChangeUserInput(event.target.value)

  const passwordLength = userInput.length

  const validPassword = passwordLength < 8
  return (
    <Container>
      <PasswordValidatorContainer>
        <PasswordContainerHeading>Password Validator</PasswordContainerHeading>
        <PasswordDescription>
          Check how strong and secure is your password
        </PasswordDescription>
        <PasswordInputBox
          type="password"
          value={userInput}
          onChange={onEnterUserPassword}
        />
        {validPassword ? (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        ) : null}
      </PasswordValidatorContainer>
    </Container>
  )
}
export default PasswordValidator
