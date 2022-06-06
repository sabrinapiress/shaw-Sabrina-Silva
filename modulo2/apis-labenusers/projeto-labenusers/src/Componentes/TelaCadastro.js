import axios from "axios";
import React from "react";
import styled from "styled-components";

const ContainerCadastro = styled.div`
  background-color: #ccc;
  margin: 0 auto;
  margin-top: 5rem;
  width: 300px;
  padding-top: -2em;
  padding-left: 7rem;
  padding-bottom: 3rem;
  border: 1px solid black;
  border-radius: 1em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  input {
    border-radius: 4px;
    border: 1px solid black;
    height: 1.6rem;
  }

  button {
    border: 0.2px solid black;
    border-radius: 3px;
    height: 1.5rem;
  }
  
  h2{
      margin-left: 0.3rem;
  }
`;

const headers = {
  headers: {
    Authorization: "sabrina-pires-shaw",
  },
};

export default class TelaCadastro extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

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
        alert("Usuario(a) cadastrado(a) com sucesso!");

        // this.getAllUsers()

        this.setState({
          inputName: "",
          inputEmail: "",
        });
      })
      .catch((err) => {
        alert("Erro. Tente novamente!");
      });
  };

  render() {
    return (
      <ContainerCadastro>
        <table>
          <h2>Cadastro</h2>
          <div>
            <td>
              <tr>
                <input
                  placeholder={"Nome"}
                  value={this.state.inputName}
                  onChange={this.onChangeName}
                />
              </tr>
            </td>
          </div>

          <div>
            <td>
              <tr>
                <input
                  placeholder={"Email"}
                  value={this.state.inputEmail}
                  onChange={this.onChangeEmail}
                />
              </tr>
            </td>
          </div>
          <div>
            <td>
              <tr>
                <button onClick={this.postCreateUser}>Cadastrar</button>
              </tr>
            </td>
          </div>
          <div>
            <td>
              <tr>
                <button onClick={this.props.irParaLista}>
                  Ir para Lista de Usuarios
                </button>
              </tr>
            </td>
          </div>
        </table>
      </ContainerCadastro>
    );
  }
}
