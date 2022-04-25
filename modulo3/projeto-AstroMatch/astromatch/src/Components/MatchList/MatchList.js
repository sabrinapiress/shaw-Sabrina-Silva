import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, TitleH3} from "./styled";

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/";

const MatchList = () => {
   const [matchList, setMatchList] = useState([])

   const getMatches = () => {
    axios
    .get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sabrina-shaw/matches")
    .then ((res)=>{
        console.log(res)
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

const List = matchList.response
let renderList
 renderList = List ? matchList.response.map((match)=>{
    return(
        <div key={match.id}>
            <img src={match.photo} alt= {match.name}/>
            <p>{match.name}</p>
        </div>
    )
}): renderList = <p>Erro! Sem matches</p>

//console.log(renderList);
    return (
        <Container>
            <>
            <TitleH3>Seus Matches</TitleH3>
            </>
            {renderList}
            <button onClick={()=> putClear()}>Excluir matches</button>
        </Container>
    )
}

export default MatchList 