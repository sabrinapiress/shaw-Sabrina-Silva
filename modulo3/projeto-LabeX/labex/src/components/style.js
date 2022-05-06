import styled from "styled-components"

export const Header = styled.div`
  border: solid 2px black;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  /* width: 80rem; */
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
      width: 7.4rem;
      height: 2.3rem;
      background-color: #00ffff;
      color: #fff;
    }
  }
 @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    width: 80rem;
}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 80rem;
}
`;

export const Logo = styled.img`
  width: 3rem;
  cursor: pointer;
`;

export const Title = styled.p`
  font-family: Tahoma;
  font-weight: 500;
  font-size: large;
  padding-right: 62rem;
  cursor: default;
`;

export const I = styled.i`
  color: #01dfd7;
  font-weight: bolder;
`;
