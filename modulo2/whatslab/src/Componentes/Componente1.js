import styled from "styled-components";
const WhatsLab = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-family :  'Ubuntu' , sans-serif;
`;

const Titulo = styled.div`
color: #fff;
font-size: 1.5rem;
font-weight: bolder;
background-color: gray;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border: 2px solid rosybrown;
`

const Chat = styled.div`
border: 2px solid gray;
width: 28rem;
height: 50rem;
display: flex;
justify-content: bottom;
flex-direction: column;
align-items: center;
justify-content: flex-end;
background-color: rosybrown ;
padding-bottom: 0.5rem;
`;

const Input = styled.div`
display: flex;

`;

const Mensagem = styled.div`
display: flex;


`

const InputNome = styled.input`
width: 35%;
height: 2rem;
border: 1px solid #ccc;
border-radius:7px;
font-weight: bolder;
font-weight: bolder;
`

const InputMsg = styled.input`
width: 100%;
height: 2rem;
border: 1px solid #ccc;
border-radius:7px;
`

const Botao = styled.button`
border-radius:7px;
color: grey;
height: 2.3rem;
width: 25%;
`

export {WhatsLab, Titulo, Chat, Input, Mensagem, InputNome, InputMsg, Botao}