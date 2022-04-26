import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import React from "react";

const ApplicationFormPage = () => {
  const navigate = useNavigate()
  
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
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Enviar</button>
    </Container>
  );
};

export default ApplicationFormPage;
