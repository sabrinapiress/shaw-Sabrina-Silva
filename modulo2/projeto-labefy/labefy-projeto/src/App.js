import React from "react";
import TelaAdicionaMusica from "./Componentes/AdicionaMusica/TelaAdicionaMusica";
import TelaCriaPlaylist from "./Componentes/CriarPlaylist/TelaCriaPlaylist";
import TelaDetalhesPlaylist from "./Componentes/DetalhesPlaylist/TelaDetalhesPlaylist";

export default class App extends React.Component {
  state = {
    telaAtual: "criar playlist",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criar playlist":
        return <TelaCriaPlaylist irParaPlaylist={this.irParaPlaylist} />;
      case "playlist":
        return <TelaDetalhesPlaylist irParaMusicaPlaylist={this.irParaMusicaPlaylist}/>;
        case "adicionar musica":
        return <TelaAdicionaMusica  irParaCriarPlaylist={this.irParaCriarPlaylist}/>;
      default:
        return <div>Erro!</div>;
    }
  };
 
  irParaCriarPlaylist = () => {
    this.setState({ telaAtual: "criar playlist" });
  };

  irParaPlaylist = () => {
    this.setState({ telaAtual: "playlist" });
  };

  irParaMusicaPlaylist = () => {
    this.setState({ telaAtual : "adicionar musica"})
  }


  render() {

    return <div>{this.escolheTela()}</div>;
  }
}
