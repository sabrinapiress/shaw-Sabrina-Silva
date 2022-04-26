import { Container } from "./style";
import { useNavigate } from "react-router-dom"
import { goBack, goToCreateTripPage, goToTripDetailsPage } from "../../routes/coordinator";

const AdiminHomePage = ()=> {
  const navigate = useNavigate()

    return (
      <Container>
      <h1>Painel Administrativo</h1>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button>Logout</button>
      <p onClick={() => goToTripDetailsPage(navigate)}>Viagens</p>
      <button>Lixeira</button>
      </Container>
    );
  }
  
  export default AdiminHomePage;