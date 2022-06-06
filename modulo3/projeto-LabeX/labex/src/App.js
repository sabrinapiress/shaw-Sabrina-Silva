import { Router} from "./routes/Router";
import React from "react";
import styled from "styled-components"

const Container = styled.div`
margin: auto;
`
const App = ()=> {
  document.title = "LabeX Viagens"
  
  return (
    <Container>
      <Router/>
    </Container>
  );
}

export default App;
