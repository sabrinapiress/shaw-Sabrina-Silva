import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, TitleH3} from "./styled";

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/";

const MatchList = () => {
   const [matchList, setMatchList] = useState([])

   const getMatches = () => {
    axios
    .get (`${url}matches`)
    .then ((res)=>{
        setMatchList(res.data.matches)
    }) 
    .catch ((err)=>{
        alert("Erro!", err.response)
    })
   }

   useEffect(() => {
    getMatches();
  }, []);

  const putClear = () => {
      axios
      .put(`${url}clear`)
      .then(()=>{
          setMatchList([])
      })
      .catch((err)=>{
        alert("Erro ao excluir matches!", err.response)
      })
  }

  const renderlist = matchList.map((match)=>{
      return(
          <div key={match.id}>
              <img src={match.photo} alt= {match.name}/>
              <p>{match.name}</p>
          </div>
      )
  })
//   console.log(matchList);

    return (
        <Container>
            <>
            <TitleH3>Seus Matches</TitleH3>
            </>
            {renderlist}
            <button onClick={putClear}>Excluir matches</button>
        </Container>
    )
}

export default MatchList 