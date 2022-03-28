import React, { useState } from "react";
import "./App.css";
import {
  WhatsLab,
  Titulo,
  Chat,
  Input,
  Mensagem,
  InputNome,
  InputMsg,
  Botao,
  Img,
  BalaoDeMensagem
} from "./Componentes/Componente1";

class App extends React.Component {
  state = {
    mensagem: [],

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
      //   return (
      //     <div>
      //      <b> {props.nome}</b>: {props.chat} //tbm tive um problema com as mensagens, que quando mando mais de uma elas se grudam, e não consegui resolver.
      //     </div>
      //   );
      // });
      const nome = this.props.nome.toLowerCase();
      if (nome === "eu") {
        return <BalaoDeMensagem>{this.props.chat}</BalaoDeMensagem>;
      } else {
        return (
          <BalaoDeMensagem tipo = {"outro"}>
            <p>{this.props.nome}</p>
            <p>{this.props.chat}</p>
          </BalaoDeMensagem> // Tentei fazer a estilização, mas ele parou de funcionar, vou deixar assim para se possivel me ajudarem no meu erro na correção!
        );
      }
    });

    return (
      <WhatsLab>
        <div>
          <Titulo>
            <Img
              src="data:image/jpeg;base64,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"
              alt=""
            />{" Ana "}
          </Titulo>
          <Chat>
            <Mensagem>{mensagem}</Mensagem>
            <Input>
              <InputNome
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
