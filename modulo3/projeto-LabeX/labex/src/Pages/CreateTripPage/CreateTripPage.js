import styled from "styled-components";

const CreateTripPage = () => {

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 2px black;
    margin: 2rem;
  `;

  return (
    <Container>
      <h1>Criar Viagem</h1>
      <input placeholder="Nome"></input>
      <select name="Escolha uma Viagem">
        <option>Escolha um Planeta</option>
      </select>
      <input placeholder="Data"></input>
      <input placeholder="Descrição"></input>
      <input placeholder="Duração em dias"></input>
      <button>Voltar</button>
      <button>Criar</button>
    </Container>
  );
};

export default CreateTripPage;
