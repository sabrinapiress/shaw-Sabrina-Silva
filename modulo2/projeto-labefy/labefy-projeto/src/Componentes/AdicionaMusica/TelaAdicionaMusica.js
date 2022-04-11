import axios from "axios";
import React from "react";
import { ContainerAdicionaMusicas, Inputs, ButtonAdicionar, ButtonVoltar} from "./styledAdicionaMusica";

const headers = {
    headers: {
      Authorization: "sabrina-pires-shaw",
    },
  };

export default class TelaAdicionaMusica extends React.Component {
  state = {
    // name: "",
    // artist:"",
    // url: "",

    inputNomeMusica: "",
    inputArtista: "",
    inputUrl: "",
  };

  postAddTrackToPlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`;

    const body = {
      name: this.state.inputNomeMusica,
      artist: this.state.inputArtista,
      url: this.state.inputUrl,
    }
    axios
    .post(url, body, headers)

    .then((res)=> {
      alert("Musica adicionada")

      this.setState({inputNomeMusica: ""})
      this.setState({inputArtista: ""})
      this.setState({inputUrl: ""})

    }).catch((err)=> {
      alert(err, "Ocorreu um problema, tente novamente");
    })
  };

  onChangeNomeMusica = (eve) => {
    this.setState({
      inputNomeMusica: eve.target.value,
    });
  };

  onChangeArtista = (eve) => {
    this.setState({
      inputArtista: eve.target.value,
    });
  };

  onChangeUrl = (eve) => {
    this.setState({
      inputUrl: eve.target.value,
    });
  };

  render() {
    return (
      <ContainerAdicionaMusicas>
          <h3>Adicione Suas Musicas</h3>
        <div>
        <p>Musica:</p>
          <Inputs
            placeholder={"Nome"}
            value={this.state.inputNomeMusica}
            onChange={this.onChangeNomeMusica}
          />
        </div>
        <div>
        <p>Artista:</p>
          <Inputs
            placeholder={"Cantor/Banda/Grupo"}
            value={this.state.inputArtista}
            onChange={this.onChangeArtista}
          />
        </div>
        <div>
        <p>Faixa:</p>
          <Inputs
            placeholder={"Link"}
            value={this.state.inputUrl}
            onChange={this.onChangeUrl}
          />
        </div>
        <ButtonAdicionar onClick={() => this.postAddTrackToPlaylist()}>Adicionar</ButtonAdicionar>
        <ButtonVoltar onClick={this.props.irParaCriarPlaylist}>Voltar ao Inicio</ButtonVoltar>
      </ContainerAdicionaMusicas>
    );
  }
}
