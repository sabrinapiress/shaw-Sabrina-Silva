import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useProtectedPage } from "../../constant/constants";
import {
  goToCreateTripPage,
  goToTripDetailsPage,
} from "../../routes/coordinator";


const AdiminHomePage = () => {
  const navigate = useNavigate();

  useProtectedPage()

  return (
    <Container>
      <h1>Painel Administrativo</h1>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button>Logout</button>
      <p onClick={() => goToTripDetailsPage(navigate)}>Viagens</p>
      <button>Lixeira</button>
    </Container>
  );
};

export default AdiminHomePage;
