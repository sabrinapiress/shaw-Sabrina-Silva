import styled from "styled-components";
const WhatsLab = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
`;

const Titulo = styled.div`
  color: black;
  font-size: 1.5rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid grey;
  flex-wrap: wrap;

  img {
    /* flex-wrap: wrap; 
display: flex;
flex-direction: row;
justify-content: flex-start; */
    width: 12%;
    height: 12%;
    border-radius: 15rem;
    padding-top: 5px;
  }
`;          //estou tendo problema com o alinhamento da imagem, tentei modificar algumas coisas mas não consegui..

const Img = styled.img``;

const BalaoDeMensagem = styled.div`
  background-color: ${(props) => {
    if (props.tipo === "eu") {
      return "#DDF7C8";
    } else if (props.tipo === "outro") {
      return "#ffffff";
    }
  }};
`;

const Chat = styled.div`
  border: 2px solid gray;
  width: 28rem;
  height: 50rem;
  display: flex;
  justify-content: bottom;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #f2e984;
  padding-bottom: 0.5rem;
  border-top: none;
`;

const Input = styled.div`
  display: flex;
`;

const Mensagem = styled.div`
  display: flex;
  border: gray;
`;

const InputNome = styled.input`
  width: 35%;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-weight: bolder;
  font-weight: bolder;
`;

const InputMsg = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  margin-left: 0.3rem;
  
`;

const Botao = styled.button`
  border-radius: 7px;
  margin-left: 0.7rem;
  border-color: -1px gray;
  color:gray ;
  height: 2.3rem;
  width: 25%;
  font-weight: bolder;
  font-size: 0.9rem;

  button:hover{

  }
`; // queria usar o :hover mas não sei se funcionou não

export {
  WhatsLab,
  Titulo,
  Chat,
  Input,
  Mensagem,
  InputNome,
  InputMsg,
  Botao,
  Img,
  BalaoDeMensagem,
};
