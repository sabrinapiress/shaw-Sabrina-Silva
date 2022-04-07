import React from "react";
import TelaCriaPlaylist from "./Componentes/TelaCriaPlaylist";
import TelaDetalhesPlaylist from "./Componentes/TelaDetalhesPlaylist";

export default class App extends React.Component {
  state = {
    telaAtual: "criar playlist",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criar playlist":
        return <TelaCriaPlaylist irParaDetalhePlaylist={this.irParaDetalhePlaylist} />;
      case "detalhes":
        return <TelaDetalhesPlaylist irParaCriarPlaylist={this.irParaCriarPlaylist} />;
      default:
        return <div>Erro!</div>;
    }
  };

  irParaCriarPlaylist = () => {
    this.setState({ telaAtual: "criar playlist" });
  };

  irParaDetalhePlaylist = () => {
    this.setState({ telaAtual: "detalhes" });
  };

  render() {

    return <div>{this.escolheTela()}</div>;
  }
}
