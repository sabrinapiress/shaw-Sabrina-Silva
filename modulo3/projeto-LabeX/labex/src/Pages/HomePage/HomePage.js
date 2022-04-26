import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: solid 2px black;
margin: 2rem;
`

const HomePage = ()=> {
    return (
      <Container>
          <img/>
       <h1>LabeX - Viagens</h1>
       <button>Ver Viagens</button>
       <button>Área de Admin</button>
      </Container>
    );
  }
  
  export default HomePage
