import styled from "styled-components";

export const Button = styled.button`
  margin: 2rem;
  width: 8rem;
  height: 2.8rem;
  border-radius: 2rem;
  border: solid 2px black;
  color: #01dfd7;
  background-color: #fff;
  margin-left: 8rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.1s;
  :hover {
    width: 9rem;
    height: 3rem;
    background-color: #00ffff;
    color: #fff;
  }
`;

export const TextHome = styled.div`
  /* position: relative;
  bottom: 18rem; */
  width: 100%;
  height: 25rem;
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 1.2rem;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  p{
    margin-right: 8rem;
  }
`;
export const ImgHome = styled.img`
  width: 100%;
  height: 25rem;
`;

export const Header = styled.div`
  border: solid 2px black;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    width: 7.3rem;
    height: 2.1rem;
    border-radius: 2rem;
    border: solid 2px black;
    color: #01dfd7;
    background-color: #e6e6e6;
    margin-right: 1rem;
    cursor: pointer;
    transition: 0.1s;
    :hover {
      width: 7.4  rem;
      height: 2.3rem;
      background-color: #00ffff;
      color: #fff;
    }
  }
`;

export const Logo = styled.img`
  width: 3rem;
`;

export const Title = styled.p`
  font-family: Tahoma;
  font-weight: 500;
  font-size: large;
  padding-right: 47rem;
`;

export const I = styled.i`
  color: #01dfd7;
  font-weight: bolder;
`;
