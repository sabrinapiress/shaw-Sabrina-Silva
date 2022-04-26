import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: solid 2px black;
margin: 2rem;
`

const AdiminHomePage = ()=> {

    return (
      <Container>
      <h1>Painel Administrativo</h1>
      <button>Voltar</button>
      <button>Criar Viagem</button>
      <button>Logout</button>
      <p>Viagens</p>
      <button>Lixeira</button>
      </Container>
    );
  }
  
  export default AdiminHomePage;