import { Container,  CardTrips, IconeLixeira } from "./style";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect} from "react";
import { useProtectedPage, url, token } from "../../constant/constants";
import { Headers } from "../../components/Header";
import img from "../../assets/lixeira.png"
import axios from "axios";
import {
  goToCreateTripPage,
  goToTripDetailsPage,
  goToLoginPage
} from "../../routes/coordinator";


const AdiminHomePage = () => {
  const navigate = useNavigate();
  // 
  useProtectedPage();
  const [id, setId] = useState("");
  // let dd = useRequestData("/trips", {})

  const [tripList, setTripList] = useState([]);
  const getTrip = () => {
    axios
      .get(`${url}/trips`)
      .then((res) => {
        setTripList(res.data.trips);
      })
      .catch((err) => {
        alert("Erro!", err);
      });
  };

  useEffect(() => {
    getTrip();
  }, []);

  const deleteTrip = async (id) =>{
    axios
    .delete(`${url}/trips/${id}`, {
      headers: {
        auth: token
      }
    })
    .then(()=>{
     window.confirm(`Tem certeza que deseja deletar a viagem ${tripList.name}?`)
     getTrip()
     alert("Viagem excluida!")
    })
    .catch((err)=>{
      alert("Erro!", err.response)
    })
  }
  const onChangeId = (event) => {
    setId(event.target.value);
  };
  
  const logOut = () => {
    window.localStorage.removeItem('token')
    goToLoginPage(navigate)
  }

  const renderList = tripList ? (
    tripList.map((trips) => {
      return (
        <CardTrips>
          <div value={trips.id} onClick={() => goToTripDetailsPage(navigate, trips.id)}>
            <p>{trips.name}</p>
          </div>
          <IconeLixeira onClick={() => deleteTrip(trips.id)}  src={img}/>
        </CardTrips>
      );
    })
  ) : (
    <p>Erro! Sem viagens</p>
  );

  return (
    <Container>
      <Headers/>
      <h1>Painel Administrativo</h1>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <div onChange={onChangeId}>{renderList}</div>
      <button onClick={goToLoginPage}>Logout</button>
    </Container>
  );
};

export default AdiminHomePage;
