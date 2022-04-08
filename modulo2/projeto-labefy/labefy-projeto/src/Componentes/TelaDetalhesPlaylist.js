import React from "react";
import axios from "axios";
import styled from "styled-components";

const headers = {
  headers: {
    Authorization: "sabrina-pires-shaw",
  },
};

export default class TelaDetalhesPlaylist extends React.Component {
  state = {
    playlist: [],
    inputNomeMusica: "",
    inputArtista: "",
    inputUrl: "",
  };

  getAllPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ playlist: response.data.result.list });
      })
      .catch((error) => {
        alert(error, "Ocorreu um problema, tente novamente");
      });
  };

  postAddTrackToPlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`;

    const body = {
      name: this.state.inputNomeMusica,
      artist: this.state.inputArtista,
      url:this.state.inputUrl,
    }
    .post(url, body, headers);
  };

  deletePlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`;

    axios
      .delete(url, headers)
      .then((res) => {
        alert("Playlist deletada!");
      })
      .catch((err) => {
        alert(err, "Erro!");
      });
  };
  componentDidMount() {
    this.getAllPlaylists();
  }

  componentDidUpdate() {
    this.getAllPlaylists();
  }

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
    const renderPlaylist = this.state.playlist.map((playlists) => {
      return (
        <div key={playlists.id}>
          <li>
            {playlists.name}
            <button onClick={() => this.deletePlaylist(playlists.id)}>X</button>
          </li>
          <div>
            <input
              placeholder={"Musica"}
              value={this.state.inputNomeMusica}
              onChange={this.onChangeNomeMusica}
            />
          </div>
          <div>
            <input
              placeholder={"Artista"}
              value={this.state.inputArtista}
              onChange={this.onChangeArtista}
            />
          </div>
          <div>
            <input
              placeholder={"Faixa"}
              value={this.state.inputUrl}
              onChange={this.onChangeUrl}
            />
          </div>
        </div>
      );
    });

    return (
      <div>
        <h3>Sua Playlist</h3>
        <ul>{renderPlaylist}</ul>
        <button onClick={this.props.irParaCriarPlaylist}>
          Criar nova Playlist
        </button>
      </div>
    );
  }
}
