import { Container } from "./style";
import { useNavigate } from "react-router-dom"
import { goBack, goToAdiminHomePage } from "../../routes/coordinator";
import React from "react";

const LoginPage = ()=> {
  const navigate = useNavigate()

    return (
      <Container>
       <h1>Login</h1>
       <input placeholder="E-mail"></input>
       <input placeholder="Senha"></input>
       <button onClick={() => goBack(navigate)}>Voltar</button>
       <button onClick={() => goToAdiminHomePage(navigate)}>Entrar</button>
      </Container>
    );
  }
  
  export default LoginPage;