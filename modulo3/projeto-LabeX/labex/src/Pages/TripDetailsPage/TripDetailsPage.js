import { Container } from "./style";
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/coordinator";

const TripDetailsPage = ()=> {
const navigate = useNavigate()

    return (
      <Container>
          <div>Detalhes da viagem aqui</div>
          <button onClick={() => goBack(navigate)}>Voltar</button>
      </Container>
    );
  }
  
  export default TripDetailsPage;