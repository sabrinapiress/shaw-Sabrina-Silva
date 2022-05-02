import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button {
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
      background-color: #00ffff;
      color: #fff;
    }
  }
`

export const CardTrips = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.3);
  padding: 2rem 2rem;
  border-radius: 3rem;
  margin: 40px;
  background-color: #e6e6e6;
  align-items:center;
  justify-content: space-between;
  font-family: Tahoma;
  width: 30rem;
  p{
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    :hover{
    font-size: 1.1rem;
    }
  }
`;

export const IconeLixeira = styled.img`
 width: 2rem;
 cursor: pointer;
 transition: 0.2s;
`