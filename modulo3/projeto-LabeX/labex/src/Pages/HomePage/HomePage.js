import { Button, Header, Logo, Title, I, ImgHome, TextHome} from "./style";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../routes/coordinator";
import img23 from "../../assets/24.webp"
import gif1 from "../../assets/gif1.gif"
import React from "react";

const HomePage = ()=> {
  const navigate = useNavigate()
 
    return (
      <div>
       <Header>
       <Logo src={gif1}/>
       <Title>Labe<span> <I>X</I></span> Viagens</Title>
       <button onClick={() => goToLoginPage(navigate)}>Área Admin</button>
       </Header>
       <TextHome>
       <Button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</Button>
       <p> Realize seu sonho de conhecer outros planetas!<br/>Vá ao espaço com Labe <i>X</i>.</p>
       </TextHome>
       <ImgHome src={img23} alt="Imagem no espaço"/>
      </div>
    );
  }
  
  export default HomePage
