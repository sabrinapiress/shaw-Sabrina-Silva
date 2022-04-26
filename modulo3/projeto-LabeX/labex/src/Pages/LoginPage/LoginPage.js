import styled from "styled-components";

const LoginPage = ()=> {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px black;
  margin: 2rem;
`;

    return (
      <Container>
       <h1>Login</h1>
       <input placeholder="E-mail"></input>
       <input placeholder="Senha"></input>
       <button>Voltar</button>
       <button>Entrar</button>
      </Container>
    );
  }
  
  export default LoginPage;