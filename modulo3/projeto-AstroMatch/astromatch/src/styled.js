import styled from "styled-components";

export const ContainerPai = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fcb4d3;
  padding-bottom: 2rem;
  padding-top: 2rem;

`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 18rem;
  /* min-height: auto; */
  height: 70vh;
  border: 2px solid #fcb4d3;
  border-radius: 3rem;
  background-color: #fff;
`;

export const HeaderContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleH3 = styled.h3`
  display: flex;
  cursor: context-menu;
  color: #fff;
  animation: pulsate 1.5s infinite;
  text-align: center;
  font-size: 1.2rem;
  text-shadow: 0 0 6px #fcb4d3, 0 0 5px #fcb4d3, 0 0 22px #fff, 0 0 4px #fcb4d3,
    0 0 8px #fcb4d3, 0 0 9px #fcb4d3, 0 0 102px #e6739f, 0 0 151px #e6739f;
`;

export const ImgCoração = styled.img`
  cursor: pointer;
  padding-left: 1rem;
  height: 2rem;
  transition: 0.2s;
  :hover {
    height: 2.1rem;
  }
`;

export const ImgVoltar = styled.img`
padding-left: 1rem;
  height: 1.5rem;
  transition: 0.1s;
  cursor: pointer;
  :hover {
    height: 1.7rem;
  }
`;
