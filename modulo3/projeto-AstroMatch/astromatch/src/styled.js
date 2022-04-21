import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blueviolet;
  width: 25%;
  height: 30rem;
  margin-top: 5rem;
  margin-left: 22rem;
`;

export const Profile = styled.div`
  width: 90%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 2rem;
`;

export const ImgPerfil = styled.img`

 width: 80%;
`

export const ImgLike = styled.img`
 height: 8%;
 :hover{
    height: 10%;  
 }
`
export const ImgNoLike = styled.img`
 height: 8%;
 :hover{
    height: 10%;  
 }
`

export const Button = styled.div`
padding-top: 1rem;
width: 10rem;
display: flex;
flex-direction: row;
justify-content: space-between;
`