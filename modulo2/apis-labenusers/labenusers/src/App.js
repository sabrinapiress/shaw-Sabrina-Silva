import axios from "axios";
import React from "react";

const headers = {
  headers: {
    Authorization: "sabrina-pires-shaw",
  },
};

export default class App extends React.Component {
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: "",
  };

  componentDidMount(){
    this.getAllUsers()
  }

  getAllUsers() {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, headers)
      .then((res) => {
        this.setState({
          usuarios: res.data,
        });
        console.log(res.data)
      })
      .catch((err) => {
        alert(err.response);
      });
  }

  postCreateUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .post(url, body, headers)
      .then((res) => {

        this.getAllUsers()

        this.setState({
          inputName: "",
          inputEmail: "",
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // deleteUser = () => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
  // }

  onChangeName = (eve) => {
    this.setState({
      inputName: eve.target.value,
    });
  };

  onChangeEmail = (eve) => {
    this.setState({
      inputEmail: eve.target.value,
    });
  };


  render() {
    const renderUsuario = this.state.usuarios.map((usuario)=> {
      return <li key= {usuario.id}>{usuario.name}</li>
    })

    return (
      <div>
        <label>
          <button>Trocar de Tela</button>
          <input
            placeholder="Nome"
            value={this.state.inputName}
            onChange={this.onChangeName}
          />
          <input
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.onChangeEmail}
          />
        </label>
        <button onClick={this.postCreateUser}>Enviar</button>
          <ul>{renderUsuario}</ul>
      </div>
    );
  }
}
