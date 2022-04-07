//import axios from "axios";
import React from "react";
import TelaCadastro from "./Componentes/TelaCadastro";
import TelaListaUsuarios from "./Componentes/TelaListaUsuarios";
//import styled from "styled-components";


export default class App extends React.Component {
   state = {
    telaAtual: "cadastro"
  }

  escolheTela = () =>{
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista = {this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro = {this.irParaCadastro}/>
      default: 
      return <div>Erro! Pagina não encontrada</div>
    }
  }

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista"})
  }

  render() {

    return (
      <div>
         {this.escolheTela()}
      </div>
    );
  }
}
