import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PasswordContainer = styled.div`
  background-color: #475569;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  text-align: center;
  box-shadow: 4px 4px 4px 4px #434451;
  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 70%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 21px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`

export const Input = styled.input`
  background-color: #edeeff;
  width: 80%;
  padding: 20px;
  color: black;
`

export const Text = styled.p`
  font-size: 16px;
  color: #f8fafc;
  margin-bottom: 30px;
`

export const Error = styled.p`
  font-size: 15px;
  color: #ef4444;
`
