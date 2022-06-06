import React from "react";
import styled from "styled-components";

const EstiloEmail = styled.imagemEmail`
    display: flex;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`


const TextoEmail = styled.textoEmail`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    `


const EstiloEndereco = styled.imagemEndereco`
    display: flex;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const TextoEndereco = styled.textoEmndereco`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

function CardPequeno(props) {
  return (
    <div>
      <EstiloEmail><img className="imagemEmail" src={props.imagemEmail} /></EstiloEmail>
      <TextoEmail><p className="textoEmail">{props.email}</p></TextoEmail>
    </div>
  );
}

function CardPequenoEndereco(props) {
  return (
    <div>
     <EstiloEndereco> <img className="EstiloEndereco" src={props.imagemEndereco} /></EstiloEndereco>
     <TextoEndereco><p className="TextoEndereco">{props.endereco}</p></TextoEndereco>
    </div>
  );
}

export { CardPequeno, CardPequenoEndereco };
