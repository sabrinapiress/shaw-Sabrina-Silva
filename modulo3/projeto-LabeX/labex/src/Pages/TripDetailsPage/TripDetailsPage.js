import { Container } from "./style";
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/coordinator";
import React, { useEffect } from "react";
import axios from "axios";
import { url } from "../../constant/constants";
import { useProtectedPage , token} from "../../constant/constants";


const TripDetailsPage = ()=> {
const navigate = useNavigate()

useProtectedPage()

useEffect(()=> {
  // const token = localStorage.getItem('token')
  axios.get(`${url}/trip/id`, {
    headers: {
      auth: token
    }
  })
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    console.log("Erro!", err.response);
  })
  }, [])

    return (
      <Container>
          <div>Detalhes da viagem aqui</div>
          <button onClick={() => goBack(navigate)}>Voltar</button>
      </Container>
    );
  }
  
  export default TripDetailsPage;