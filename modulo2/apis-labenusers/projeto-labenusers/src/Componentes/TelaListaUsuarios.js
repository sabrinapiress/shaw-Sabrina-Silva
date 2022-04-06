import React from "react";
import axios from "axios";
import styled from "styled-components";

const Usuario = styled.div`
  background-color: #ccc;
  margin: 0 auto;
  margin-top: 5rem;
  width: 300px;
  padding-top: -2em;
  padding-left: 8rem;
  padding-bottom: 3rem;
  border: 1px solid black;
  border-radius: 1em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

`;

const BotaoExcluir = styled.button`
margin-left: 0.5rem;
background-color: #ccc;
border: 0.2px solid black;
border-radius: 3px;
font-weight: bolder;
`
const BotaoIrParaCadastro = styled.button`
border: 0.2px solid black;
border-radius: 3px;
margin-left: 1rem;
height: 1.5rem;
`

const headers = {
  headers: {
    Authorization: "sabrina-pires-shaw",
  },
};

export default class TelaListaUsuarios extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.getAllUsers();
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
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  }

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    axios
      .delete(url, headers)
      .then((res) => {
        alert("Usuario(a) deletado(a) com sucesso!");

        this.getAllUsers();
      })
      .catch((err) => {
        alert("Erro");
      });
  };

  render() {
    const renderUsuario = this.state.usuarios.map((usuario) => {
      return (
        <div key={usuario.id}>
          <li>
            {usuario.name}
            <BotaoExcluir onClick={() => this.deleteUser(usuario.id)}>X</BotaoExcluir>
          </li>
        </div>
      );
    });

    return (
      <Usuario>
        <h3>Lista de Usuarios</h3>
        <ul>{renderUsuario}</ul>
        <BotaoIrParaCadastro onClick={this.props.irParaCadastro}>Ir para Cadastro</BotaoIrParaCadastro>
      </Usuario>
    );
  }
}
