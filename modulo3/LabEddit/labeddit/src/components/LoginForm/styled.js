import styled from "styled-components"

export const ContainerForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'IBM Plex Sans';
`
export const InputEmail = styled.input`
width: 18rem;
height: 2.5rem;
border: solid 2px #E6E6E6;
margin: 6px;
`

export const InputSenha = styled.input`
width: 18rem;
height: 2.5rem;
border: solid 2px #E6E6E6;
`

export const LoginButton = styled.button`
border: none;
width: 18rem;
height: 2rem;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 27px;
color: #fff;
margin-top: 1rem;
cursor: pointer;
`

export const Loading = styled.img`
width: 2rem;
height: 2rem;

`