import axios from "axios";
import React from "react";
import { ContainerCriaPlaylist, Input, ButtonCriar, ButtonDetalhesPlaylist } from "./styledCriarPlaylist"
import styledComponents from "styled-components";



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
      <ContainerCriaPlaylist>
        <h2>Crie sua Playlist</h2>
        <div>
          <Input
            placeholder={"Nome Playlist"}
            value={this.state.inputPlaylist}
            onChange={this.onChangePlaylist}
          />
        </div>
        <div>
          <ButtonCriar onClick={this.postCreatePlaylist}>Criar</ButtonCriar>
        </div>
        <div>
          <ButtonDetalhesPlaylist onClick={this.props.irParaPlaylist}>
            Detalhes Playlist Criadas
          </ButtonDetalhesPlaylist>
        </div>
      </ContainerCriaPlaylist>
    );
  }
}
