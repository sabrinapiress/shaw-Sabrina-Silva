import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../routes/coordinator";
import React from "react";

const HomePage = ()=> {
  const navigate = useNavigate()
 
    return (
      <Container>
          <img/>
       <h1>LabeX - Viagens</h1>
       <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</button>
       <button onClick={() => goToLoginPage(navigate)}>Área de Admin</button>
      </Container>
    );
  }
  
  export default HomePage
