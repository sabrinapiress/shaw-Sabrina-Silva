import logo from './logo.svg';
import './App.css';
import React from "react"
import Etapa1 from "./Componetes/Etapa1"
import Etapa2 from "./Componetes/Etapa2"
import Etapa3 from "./Componetes/Etapa3"
import Final from "./Componetes/Final"
import {Estilizacao, Formulario} from "./Componetes/Styled"

export default class App extends React.Component {
  state={
    etapa: 1,
  }

  proximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render(){
  let paginaAtual 
  switch (this.state.etapa) {
    case 1:
      paginaAtual =<Etapa1/>
      break;
    case 2: 
      paginaAtual = <Etapa2/>
      break;
    case 3: 
      paginaAtual = <Etapa3/>
      break;
    default:
      paginaAtual = <Final/>

  }

    return (
      <Estilizacao>
        <Formulario>
        {paginaAtual}
        </Formulario>
        <br/>
        <br/>
        <button onClick = {this.proximaEtapa} >Próxima etapa</button>
      </Estilizacao>
      
    )
  }
  
}

