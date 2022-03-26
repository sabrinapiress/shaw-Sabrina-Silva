import logo from './logo.svg';
import './App.css';
import React from "react";
import styled from 'styled-components'

const Input = styled.input`
`


 class App extends React.Component {
    state = {
        chat: [
            {

            },
        ],
        valorInputNome: "",
        valorInputMsg: "",
        onclick: false
    };

    novaPessoa = () => {
        const pessoa = {
            nome: this.state.valorInputNome,
            mensagem: this.state.valorInputMsg
        };

        const adicionaPessoa = [...this.state.chat.pessoa];
        this.setState({chat:pessoa, onclick: true});
    }
    render(){

    return (
        <div>
           <input></input>
        </div>
    );
}
}

export default App;