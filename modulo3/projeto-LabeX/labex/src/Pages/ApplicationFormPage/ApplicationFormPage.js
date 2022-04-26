import styled from "styled-components";

const ApplicationFormPage = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 2px black;
    margin: 2rem;
  `;

  return (
    <Container>
      <h1>Increva-se para uma viagem</h1>
      <select>
        <option>Escolha uma Viagem</option>
      </select>
      <input placeholder="Nome"></input>
      <input placeholder="Idade"></input>
      <input placeholder="Texto de Candidatura"></input>
      <input placeholder="Profissão"></input>
      <select name="Escolha uma Viagem">
        <option>Escolha um País</option>
      </select>
      <button>Voltar</button>
      <button>Enviar</button>
    </Container>
  );
};

export default ApplicationFormPage;
