import { Button, Header, Logo, Title, I, ImgHome, TextHome, PHome, DivHome} from "./style";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage, goToHomePage} from "../../routes/coordinator";
import img23 from "../../assets/26.png"
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
       <DivHome>
       <ImgHome src={img23} alt="Imagem no espaço"/>
       <PHome>Existem 23 planetas SUPER-HABTAVEIS no nosso universo , nós te levamos até eles na velociadade da luz.</PHome>
       </DivHome>
       <TextHome>
       <Button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</Button>
       <p> Realize seu sonho de conhecer o desconhecido!<br/>Vá ao espaço com Labe <I>X</I>.</p>
       </TextHome>
      
      </div>
    );
  }
  
  export default HomePage
