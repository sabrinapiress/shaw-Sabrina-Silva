import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem;
`

export const CardTrips = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.3);
  padding: 2rem 2rem;
  border-radius: 3rem;
  margin: 12px;
  background-color: #e6e6e6;
  align-items:flex-start ;
  justify-content: space-between;
  font-family: Tahoma;
  width: 50%;
  button {
    width: 7.3rem;
    height: 2.2rem;
    border-radius: 1rem;
    border: solid 1px black;
    color: #01dfd7;
    background-color: #e6e6e6;
    margin-bottom: 1rem;
    font-size: 17px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      background-color: #00ffff;
      color: #fff;
    }
  }

@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    width: 40rem;
}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 30rem;
}
`;