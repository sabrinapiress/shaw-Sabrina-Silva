import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
;`

class App extends React.Component {
  state = {
    id: 0,
    fotoPost: "",
    fotoUsuario: "",
    nomeUsuario: "",
    postagem: [
      {
        id: "1",
        fotoUsuario: "https://picsum.photos/50/50",
        nomeUsuario: "paulinha",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        id: "2",
        fotoUsuario: "https://picsum.photos/50/51",
        nomeUsuario: "joao",
        fotoPost: "https://picsum.photos/200/151",
      },
      {
        id: "3",
        fotoUsuario: "https://picsum.photos/50/52",
        nomeUsuario: "amanda",
        fotoPost: "https://picsum.photos/200/152",
      },
    ],
  };

  render() {
    const renderizaNaTela = this.state.postagem.map((post) => {
      return (
        <Post
          key={post.id}
          id={post.id}
          foto={post.fotoUsuario}
          nome={post.nomeUsuario}
          post={post.fotoPost}
        />
      );
    });
    return <MainContainer>
      {renderizaNaTela}

    </MainContainer>
  }
}

export default App;