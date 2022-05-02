import styled from "styled-components";

export const ContainerPai = styled.div`

`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Tahoma;
 
`;

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
  width: 60%;
  margin-left: 18%;
@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    width: 40rem;
}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 30rem;
}
`;

export const Img = styled.img`
width: 100%;
@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
	width: 0%;
}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 0%;
}
`
export const Button = styled.button`
    width: 7.3rem;
    height: 2.2rem;
    border-radius: 1rem;
    border: solid 1px black;
    color: #01dfd7;
    background-color: #fff;
    margin-right: 1rem;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      background-color: #00ffff;
      color: #fff;
    }
`