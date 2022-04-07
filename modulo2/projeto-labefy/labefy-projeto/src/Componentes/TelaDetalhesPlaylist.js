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
    };
  
    // componentDidMount() {
    //   this.getAllPlaylist();
    // }
  
    getAllPlaylist() {
      const url =
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
  
      axios
        .get(url, headers)
        .then((res) => {
          this.setState({
            playlist: res.data,
          });
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.response);
        });
    }
  
    deletePlaylist = (playlistId) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`;
  
      axios
        .delete(url, headers)
        .then((res) => {
          alert("Usuario(a) deletado(a) com sucesso!");
  
          this.getAllPlaylist();
        })
        .catch((err) => {
          alert("Erro");
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
          </div>
        );
      });
  
      return (
        <div>
          <h3>Sua Playlist</h3>
          <ul>{renderPlaylist}</ul>
          <button onClick={this.props.irParaCriarPlaylist}>Criar nova Playlist</button>
        </div>
      );
    }
  }