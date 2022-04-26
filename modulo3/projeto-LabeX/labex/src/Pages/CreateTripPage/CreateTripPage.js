import { Container } from "./style";
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/coordinator";
import React from "react";

const CreateTripPage = () => {
  const navigate = useNavigate()

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
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Criar</button>
    </Container>
  );
};

export default CreateTripPage;
