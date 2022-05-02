import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #ec94bc;
  border-left: none;
  border-right: none;
  border-bottom: none;
  width: 90%;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

export const BlocoProfile = styled.div`
  width: min-content;
`;

export const BlocoDescrição = styled.div`
  cursor: context-menu;
  width: 12rem;
  height: min-content;
  border-radius: 1rem;
  background-color: #ec94bc;
  border: 2px solid #ec94bc;
  position: relative;
  bottom: 2rem;
  color: #fff;
  p {
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }
`;

export const ImgPerfil = styled.img`
  width: 12.2rem;
  height: 14.2rem;
  border-radius: 1.5rem;
`;

export const ImgLike = styled.img`
  width: 2.9rem;
  height: 2.9rem;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    width: 3.1rem;
    height: 3.1rem;
  }
`;

export const ImgNoLike = styled.img`
  width: 1.7rem;
  transition: 0.1s;
  :hover {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const BorderImgNoLike = styled.div`
  border: solid 3px #fca3cc;
  border-radius: 3rem;
  background-color: #fdcfdf;
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    width: 2.9rem;
    height: 2.9rem;
  }
`;

export const Button = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: end;
`;

export const NomeIdade = styled.p`
  cursor: context-menu;
  font-weight: bolder;
  position: relative;
  bottom: 2.5rem;
  left: 1.1rem;
  color: #fff;
  font-size: 0.7rem;
  color: #fff;
  transition: 0.2s;
  animation: pulsate 1.5s infinite;
  text-shadow: 0 0 7px #ec94bc, 0 0 5px #ec94bc, 0 0 22px #fff, 0 0 40px #ec94bc,
    0 0 82px #ec94bc, 0 0 92px #ec94bc, 0 0 102px #e6739f, 0 0 151px #e6739f;
  :hover {
    color: #f19dbc;
  }
`;
