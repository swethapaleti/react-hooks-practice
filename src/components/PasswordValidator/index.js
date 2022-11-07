import {useState} from 'react'

import {
  MainContainer,
  PasswordContainer,
  Heading,
  Error,
  Input,
  Text,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <Input type="password" onChange={onChangePassword} value={password} />
        {password.length <= 8 && (
          <Error>Your Password must be at least 8 characters</Error>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
