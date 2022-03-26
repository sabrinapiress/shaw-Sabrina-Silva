import React, { useState } from "react";
import "./App.css";
import {WhatsLab, Titulo, Chat, Input, Mensagem, InputNome, InputMsg, Botao} from "./Componentes/Componente1"


class App extends React.Component {
  state = {
    mensagem: [
  
    ],

    valorInputUsuario: "",
    valorInputchat: "",
  };

  conversa = () => {
    const usuario = {
      nome: this.state.valorInputUsuario,

      chat: this.state.valorInputchat,
    };

    const novomensagem = [...this.state.mensagem, usuario];



    this.setState({ mensagem: novomensagem });
    this.setState({ valorInputchat: "" });
    this.setState({ valorInputUsuario: "" });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputchat = (event) => {
    this.setState({ valorInputchat: event.target.value });
  };

  render() {
    const mensagem = this.state.mensagem.map((props) => {
      return (
        <p>
          {props.nome}: {props.chat}
        </p>
      );
    });

    return (
      <WhatsLab>
        <div>
          <Titulo>WhatsLab</Titulo>
          <Chat>
          <Mensagem> {mensagem}</Mensagem>
          <Input>
            < InputNome
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Nome"}
            />
            <InputMsg
              value={this.state.valorInputchat}
              onChange={this.onChangeInputchat}
              placeholder={"Mensagem"}
            />
            <Botao onClick={this.conversa}>Enviar</Botao>
          </Input>
          </Chat>
        </div>
      </WhatsLab>
    );
  }
}

export default App;
