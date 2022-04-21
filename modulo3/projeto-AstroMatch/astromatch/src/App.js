import react, { useState, useEffect } from "react";
import like from "./assets/verificar.png";
import noLike from "./assets/remover.png";
import Header from "./Components/Header/Header";
import {
  AppContainer,
  Profile,
  ImgPerfil,
  ImgLike,
  ImgNoLike,
  Button,
} from "./styled";
import axios from "axios";

// const aluno = {
//   Authorization: "sabrina-shaw",
// };

// const url =
//   "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/person/";

const App = () => {
  const [profile, setProfileList] = useState({});

  const getProfile = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/person`
      )
      .then((res) => {
        setProfileList(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const postChoosePerson = (id, boolean) => {
    const body = {
      id: id,
      boolean: boolean,
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/choose-person`
      )
      .then(() => {
        getProfile();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <AppContainer>
      <Header/>
      <Profile>
        {profile ? (
          <div>
            <ImgPerfil src={profile.photo} />
            <p>
              {profile.name} {profile.age}
            </p>
            <p>{profile.bio}</p>
          </div>
        ) : (
          <div>
            <p>Sem mais perfis!</p>
          </div>
        )}
      </Profile>
      <Button>
        <ImgLike onClick={()=> postChoosePerson(false)} src={noLike} alt="Like" />
        <ImgNoLike onClick={()=> postChoosePerson(true)} src={like} alt="Deslike" />
      </Button>
    </AppContainer>
  );
};

export default App;
