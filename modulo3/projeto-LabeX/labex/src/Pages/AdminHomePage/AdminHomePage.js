import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useProtectedPage, url, token } from "../../constant/constants";
import axios from "axios";
import {
  goToCreateTripPage,
  goToTripDetailsPage,
} from "../../routes/coordinator";

const AdiminHomePage = () => {
  const navigate = useNavigate();
  useProtectedPage();
  const [id, setId] = useState("");
  let dd = useRequestData("/trips", {})

  // const [tripList, setTripList] = useState([]);
  // const getTrip = () => {
  //   axios
  //     .get(`${url}/trips`)
  //     .then((res) => {
  //       setTripList(res.data.trips);
  //     })
  //     .catch((err) => {
  //       alert("Erro!", err);
  //     });
  // };

  useEffect(() => {
    getTrip();
  }, []);

  const deleteTrip = () =>{
    axios
    .del(`${url}/trips/${id}`, {
      headers: {
        auth: token
      }
    })
  
    .then(()=>{
      window.confirm(`Tem certeza que deseja deletar a viagem ${tripList.name}?`)
      setTripList([])
    })
    .catch((err)=>{
      console.log("Erro!", err.response)
    })
  }
  const onChangeId = (event) => {
    setId(event.target.value);
  };

  // const deleteTrip = () => {
  //   window.confirm(`Tem certeza que deseja deletar a viagem ${tripList.name}?`);
  //   setTripList([]);
  // };

  const renderList = tripList ? (
    tripList.map((trips) => {
      return (
        <div>
          <div value={trips.id}>
            <p onClick={() => goToTripDetailsPage(navigate)}>{trips.name}</p>
          </div>
          <button onClick={() => deleteTrip()} >
            Lixeira
          </button>
        </div>
      );
    })
  ) : (
    <p>Erro! Sem viagens</p>
  );

  return (
    <Container>
      <h1>Painel Administrativo</h1>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button>Logout</button>
      <div onChange={onChangeId}>{renderList}</div>
    </Container>
  );
};

export default AdiminHomePage;
