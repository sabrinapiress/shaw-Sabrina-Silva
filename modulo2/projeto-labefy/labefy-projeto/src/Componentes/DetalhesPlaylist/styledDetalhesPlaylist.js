import styled from "styled-components";

export const ContainaerDetalhesPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding-bottom: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h3 {
    padding-top: 4rem;
    padding-left: 2rem;
    font-size: 2.5rem;
    color: #1e90ff;
  }
`;

export const Lista = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  height: 3rem;
  border-radius: 10px;
  //border-color: #1E90FF;
  box-shadow: 1px 1px 3px 2px #1E90FF;
  margin-bottom: 10px;
  padding: 0 10px;
  cursor: pointer;

  button {
    border-radius: 5px;
    background-color: #fff;
    border: none;
    transition: transform 0.3s;
    color: #1E90FF;
    font-size: 1.2rem;
    cursor: pointer;

    :hover {
     background-color: #fff;
      color: red;
    }
  }

  :hover {
    color:#1E90FF;
    background-color: #fff;
  }

  :active {
    background-color: #4169E1;
    color: #fff;
  }
`;

export const ButtonAdicionarMusica = styled.button`
 margin-top: 1rem;
  border-radius: 4rem;
  border-color: #1e90ff;
  color: #1e90ff;
  background-color: black;
  width: 8.2rem;
  height: 2.1rem;
  cursor: pointer;
  
  :hover {
    cursor: pointer;
    color: #1e90ff;
    background-color: #fff;
  }
`

export const ButtonDeletar = styled.button``;
