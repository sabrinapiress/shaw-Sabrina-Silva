// import react, { useState, useEffect } from "react";
// import Header from "./Components/Header";
// import Profile from "./Components/Profile";
// import ButtonsMatch from "./Components/ButtonsMatch";
// import axios from "axios";

// const aluno = {
//   Authorization: "sabrina-shaw",
// };

// const url =
//   "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw";

// const App = () => {
//   const [profileList, setProfileListList] = useState({});

//   const getProfile = () =>{
//     axios
//     .get(`${url}person`)
//     .then((res) =>{
//       setProfileList(res.data.profileList)
//     })
//     .catch((res)=>{
//       console.log(res.response)
//     })
//   }

//   const postChoosePerson =(id, boolean) =>{
//     const body = {
//       id: id,
//       boolean: boolean
//       }
//     axios
//     .post(`${url}choose-person`,body)
//     .then(()=>{
//       getProfile()
//     })
//     .catch((res)=>{
//       console.log(res.response)
//     })
//   }

//   useEffect(() => {
//     getProfile();
//   }, []);

//   return (
//     <div>
//       <Header />
//       <img src={profileList.photo} />
//       <p>
//         {profileList.name}, {profileList.age} anos
//       </p>
//       <p>{profileList.bio}</p>
//       <ButtonsMatch postChoosePerson={postChoosePerson} />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";

const aluno = {
  Authorization: "sabrina-shaw",
};

const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/`;

const App = () => {

  const [profileList, setProfileList] = useState({});

  const getProfiletoChoose = () => {
    axios
      .get(`${url}person`)
      .then((res) => {
        setProfileList(res.data.profile);
      })
      .catch((res) => {
        console.log(res.response);
      });
  };

  const choosePerson = (id, boolean) => {
    const body = {
      id: id,
      boolean: boolean,
    };
    axios
      .post(`${url}choose-person`, body)
      .then(() => {
        getProfiletoChoose();
      })
      .catch((res) => {
        console.log(res.response);
      });
  };

  useEffect(() => {
    getProfiletoChoose();
  }, []);

  // const getMatches = () =>{
  //   axios
  //   .get(`${url}choose-person`)
  //   .then((res)=>{
  //   })
  //   .catch((err)=>{
  //   })
  // }
  
  return (
    <div>
      <img src={profileList.photo} />
      <p>
        {profileList.name}, {profileList.age} anos
      </p>
      <p>{profileList.bio}</p>
    </div>
  );
};
export default App;
