//import logo from "./logo.svg";
//import "./App.css";
//import React from "react";
import styled from "styled-components";
import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./App.css";

const WhatsLab = styled.div `
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
`;
const Chat = styled.div ``;
const Input = styled.div ``;

class App extends React.Component {
  state = {
    chat: [],
    valorInputNome: "",
    valorInputMsg: "",
    onClick: false,
  };

  conversa = () => {
    const pessoa = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMsg,
    };

    const adicionaConversa = [...this.state.chat, pessoa];

    //this.setState({chat:pessoa, onclick: true});
    this.setState({ chat: adicionaConversa });
    this.setState({ onChangeInputNome: "" });
    this.setState({ onChangeInputMsg: "" });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMsg = (event) => {
    this.setState({ valorInputMsg: event.target.value });
  };
  render() {
    let listaDeComponentes = this.state.chat.map((pessoa) => {
      if (this.state.onClick) {
        return (
          <div>
            <span>{pessoa.nome}</span>:<span>{pessoa.mensagem}</span>
          </div>
        );
      }
    });

    return (
      <WhatsLab>
        <Chat>
          <div>{listaDeComponentes}</div>
          <Input>
            <input type= "text" className="inputNome"
              value={this.state.valorInputNome}
              onChangeInputNome={this.onChangeInputNome}
              placeholder={"Nome"}
            />
            <input type= "text" className="inputMsg"
              value={this.state.valorInputMsg}
              onChangeInputNome={this.onChangeInputMsg}
              placeholder={"Mensagem"}
            />
          </Input>
          <button onClick={this.conversa}>Enviar</button>
        </Chat>
        </WhatsLab>
    );
  }
}

export default App;
