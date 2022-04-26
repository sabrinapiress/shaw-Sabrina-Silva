import styled from "styled-components";

const TripDetailsPage = ()=> {

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 2px black;
    margin: 2rem;
  `;

    return (
      <Container>
          <div>Detalhes da viagem aqui</div>
        <button>Voltar</button>
      </Container>
    );
  }
  
  export default TripDetailsPage;