import react, { useState} from "react";
import coracao from "./assets/chat.png";
import voltar from "././assets/botao-voltar.jfif";
import {MatchList} from "./Components/MatchList/MatchList";
import { Person } from "./Components/Person/Person";
import { AppContainer, HeaderContainer, ImgCoração, ImgVoltar, TitleH3, ContainerPai} from "./styled";

const App = () => {
  const [telaAtual, setTelaAtual] = useState("tela inicial");

  const irParaListaMatch = () => {
    if (telaAtual === "tela inicial") {
      return <Person />;
    } else {
      return <MatchList />;
    }
  };

  const goMatchList = (listaDeMatchs) => {
    setTelaAtual(listaDeMatchs);
  };
  return (
    <ContainerPai>
    <AppContainer>
      <HeaderContainer>
        <div>
          <TitleH3>astromatch</TitleH3>
        </div>
        {telaAtual === "tela inicial" ? (
          <ImgCoração
            onClick={() => goMatchList("matches")}
            src={coracao}
            alt="Lista de Matchs"
          />
        ) : (
          <ImgVoltar onClick={() => goMatchList("tela inicial")} src={voltar} alt="Voltar" />
        )}
      </HeaderContainer>
      {irParaListaMatch()}
    </AppContainer>
    </ContainerPai>
  );
};

export default App;
