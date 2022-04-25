import styled from "styled-components";

const ListTripsPage = ()=> {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px black;
  margin: 2rem;
`;
    return (
      <Container>
        <h1>Lista de Viagens</h1>
        <p>Viagens</p>
        <button>Voltar</button>
        <button>Inscrever-se</button>
      </Container>
    );
  }
  
  export default ListTripsPage