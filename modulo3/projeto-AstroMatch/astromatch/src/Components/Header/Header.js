import React, {useState} from "react";
import match from "./assests/coracao.png"
import voltar from "./assests/botao-voltar.png"
import MatchList from "../MatchList"
import App from "../../App";
import {HeaderContainer} from "./styled"

const Header = ()=> {
  const [telaAtual, setTelaAtual] = useState("tela inicial");

  const goToMatchList = () => {
    // if (telaAtual === "tela inicial"){
    //   return <MatchList/>
    // }else{
    //   return <App/>
    // }
    switch (setTelaAtual){
      case "tela inicial":
        return <App telaInicial = {telaInicial}/>
      case "lista de match":
        return <MatchList telaListaDeMatch = {telaListaDeMatch}/>
      default:
        return alert("Erro!")
    }
  }

  telaAtual = () => {
    setTelaAtual("tela inicial")
  }

  telaListaDeMatch = () => {
    setTelaAtual("lista de match")
  }

  const goMatchList = (listaDeMatchs) => {
    setTelaAtual(listaDeMatchs)
  }
    
    return (
      <HeaderContainer>
        {/* <div>
        <h3>AstroMatch</h3>
        </div>
        {!telaAtual ? (
          <button onClick = {()=> goMatchList("tela atual")}>
          <img src={match} alt="Lista de Matchs"/>
          </button>
        ) :(
          <button onClick = {()=> goMatchList("")}>
          <img src={voltar} alt="Voltar"/>
          </button>
        )}*/}
        <h3>AstroMatch</h3>
        <div>{goToMatchList()}</div> 
      </HeaderContainer>
    );
  }
  
  export default Header;