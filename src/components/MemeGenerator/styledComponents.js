// Style your components here
import styled from 'styled-components'

export const InputFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
export const Label = styled.label`
  margin: 10px 0px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const Input = styled.input`
  width: 250px;
  height: 30px;
  outline: none;
`
export const Select = styled.select`
  width: 250px;
  height: 30px;
  outline: none;
`
export const Heading = styled.h1`
  color: #35469c;
  font-weight: bold;
  font-size: 25px;
`
export const Container = styled.div`
  display: flex;
  margin-left: 50px;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const Button = styled.button`
  background-color: #0b69ff;
  border: none;
  width: 100px;
  height: 35px;
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto';
  cursor: pointer;
  border-radius: 5px;
  margin: 15px 0px;
`
export const SubContainer = styled.div`
  background-image: url(${props => props.value});
  background-size: cover;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 230px;
    height: 230px;
  }
`
export const Text = styled.p`
  font-size: ${props => props.value}px;
  font-weight: 500;
  color: #ffffff;
  font-family: 'Roboto';
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
