import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 4rem;
select{
width: 45.6%;
height: 3rem;
font-size: 1.1rem;
margin-bottom: 2rem;
border: solid 2px gray;
}
input{
width: 45%;
height: 2.2rem;
font-size: 1.1rem;
margin-bottom: 2rem;
border-top: none;
border-left: none;
border-right: none;
}
`

export const Button = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
button{
    width: 7.3rem;
    height: 2.2rem;
    border-radius: 1rem;
    border: solid 1px black;
    color: #01dfd7;
    background-color: #e6e6e6;
    margin-right: 1rem;
    font-size: 17px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      width: 7.4rem;
      height: 2.3rem;
      background-color: #00ffff;
      color: #fff;
    }
}
`