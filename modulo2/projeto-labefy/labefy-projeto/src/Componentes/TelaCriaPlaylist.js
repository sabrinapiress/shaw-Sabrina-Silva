import axios from "axios";
import React from "react";
import styled from "styled-components";

const headers = {
  headers: {
    Authorization: "sabrina-pires-shaw",
  },
};

export default class TelaCriaPlaylist extends React.Component {
  state = {
    inputPlaylist: "",
  };

  onChangePlaylist = (eve) => {
    this.setState({
      inputPlaylist: eve.target.value,
    });
  };

  postCreatePlaylist = () => {
    const body = {
      name: this.state.inputPlaylist,
    };

    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Playlist criada. Arrasooou gatah(oh)!!!");

        //this.getAllPlaylist()

        this.setState({
          inputPlaylist: "",
        });
      })
      .catch((err) => {
        alert("Erro. Tente novamente!");
      });
  };

  render() {
    return (
      <div>
        <h2>Crie sua Playlist</h2>
        <div>
          <input
            placeholder={"Nome Playlist"}
            value={this.state.inputPlaylist}
            onChange={this.onChangePlaylist}
          />
        </div>
        <div>
          <button onClick={this.postCreatePlaylist}>Criar</button>
        </div>
        <div>
          <button onClick={this.props.irParaDetalhePlaylist}>
            Detalhes Playlist
          </button>
        </div>
      </div>
    );
  }
}
