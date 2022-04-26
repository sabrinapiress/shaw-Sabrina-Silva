import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage  } from "../../routes/coordinator";

const ListTripsPage = ()=> {
  const navigate = useNavigate()

const getTripDetail = () => {
  
}
    return (
      <Container>
        <h1>Lista de Viagens</h1>
        <p>Viagens</p>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
      </Container>
    );
  }
  
  export default ListTripsPage