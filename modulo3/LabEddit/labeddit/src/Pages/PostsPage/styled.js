import styled from "styled-components";

export const ContainerComment = styled.form`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'IBM Plex Sans';
`

export const TextAreaPost = styled.textarea`
 background-color: #ededed;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  width: 85%;
  height: 10vh;
  font-size: 1.1rem;
  font-family: 'IBM Plex Sans';
  ::placeholder {
    padding: 0.2rem;
  }
`

export const ButtonComment = styled.button`
  border: none;
  width: 21rem;
  height: 2rem;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 12px;
  color: #fff;
  margin-top: 1rem;
  font-family: 'IBM Plex Sans';
  font-size: 18px;
  cursor: pointer;
`

export const Hr = styled.hr`
  width: 21rem;
  border-color: #f9b24e;
  color:#f9b24e;
`;

export const Comment = styled.div`
border: solid 1px #373737;
border-left: none;
border-right: none;
width: 87%;

`
export const ButtonPost = styled.button`
border: none;
background-color: #fff;
cursor: pointer;
:hover{
    background-color: #F7BE81;
    border-radius: 5rem;
}
`

export const ButtonDel = styled.button`
border: none;
background-color: #fff;
cursor: pointer;
:hover{
    background-color: #F7BE81;
    border-radius: 5rem;
}
`

export const RenderCommenstDiv = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

export const ButtonX = styled.button`
border: none;
background-color: #fff;
margin-left: 0.5rem;
margin-top: 0.5rem;
cursor: pointer;
`

export const Loading = styled.img`
width: 2rem;
height: 2rem;

`
export const LoadingFeed = styled.img`
width: 4rem;
margin-left: 9.5rem;
margin-top: 2rem;
margin-bottom: 1rem;
`
export const P =styled.p`
margin-left: 2rem;
font-size: small;
color: #f9b24e;
`

export const BodyP =styled.p`

`

export const NamePostP= styled.p`
color: #f9b24e;
font-size: small;
`