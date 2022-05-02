import styled from "styled-components"

export const ContainerPai = styled.div`
width: 100%;
height: 100%;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 5rem;
width: 100%;
color: #fff;
text-shadow: black 0.1em 0.1em 0.2em;
margin-top: 5rem;
h1{
  margin-left: 7rem;
  font-size: 3rem;
}
button {
    margin-top: 1rem;
    width: 6rem;
    height: 2.2rem;
    border-radius: 1rem;
    border: solid 1px #fff;
    color: #01dfd7;
    background-color: #e6e6e6;
    font-size: 17px;
    cursor: pointer;
    transition: 0.1s;
    :hover {  
      background-color: #01dfd7;
      color: #fff;
      border: solid 1px #01dfd7;
      width: 6.5rem;
      height: 2.5rem;
    }
  }
`
export const Inputs = styled.input`
display: flex;
flex-direction: column;
width: 25rem;
height: 2.3rem;
background: none;
border: 1px solid #fff;
border-radius: 1rem;
font-size: 1.1rem;
/* text-shadow: black 0.1em 0.1em 0.2em; */
margin-top: 1rem;
color: #fff;
`
export const Img=styled.img`
width: 100%;
height:100%;
`
export const DivInput = styled.div`
position: relative;
bottom: 60rem;
`