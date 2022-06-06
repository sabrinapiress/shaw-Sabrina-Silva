import styled from "styled-components";

export const ContainerAdicionaMusicas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding-bottom: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;

  h3 {
    //text-shadow: 0.1em 0.1em 0.1em;
    //text-shadow: 0 0 0.2em #1e90ff, 0 0 0.2em #1e90ff;
    padding-top: 4rem;
    padding-left: 2rem;
    font-size: 2.5rem;
    color: #1e90ff;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
   h3 {
    font-size: 2rem;
   }
}
`;

export const Inputs = styled.input`
  background-color: black;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #fff ;
  width: 20rem;
  height: 2rem;
  color: #fff;
  @media screen and (min-device-width: 321px) and (max-device-width: 480px) {
    width: 13rem;
    
  }
`;

export const ButtonAdicionar = styled.button`
  margin-top: 6rem;
  border-radius: 4rem;
  border-color: #1e90ff;
  color: #1e90ff;
  width: 7rem;
  height: 2rem;
  background-color: black;
  cursor: pointer;
  text-align: center;
  font-size: 0.95rem;

  :hover {
    color: #1e90ff;
    background-color: #fff;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  }
`;

export const ButtonVoltar = styled.button`
  margin-top: 2rem;
  border-radius: 4rem;
  border-color: #1e90ff;
  color: #1e90ff;
  width: 9rem;
  height: 3rem;
  background-color: black;
  cursor: pointer;
  text-align: center;
  font-size: 0.97rem;

  :hover {
    color: #1e90ff;
    background-color: #fff;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  }
`;
