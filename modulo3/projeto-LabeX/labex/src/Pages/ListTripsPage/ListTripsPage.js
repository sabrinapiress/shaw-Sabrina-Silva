import { Container, CardTrips, ContainerPai, Img, Button } from "./style";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage } from "../../routes/coordinator";
import axios from "axios";
import { url } from "../../constant/constants";
import { useEffect, useState } from "react";
import React from "react";
import { Headers } from "../../components/Header";
import img from "../../assets/1 (2).png"

const ListTripsPage = () => {
  const [tripList, setTripList] = useState([]);
  const navigate = useNavigate();

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

  const renderList = tripList ? (
    tripList.map((trips) => {
      return (
        <CardTrips key={trips.id}>
          <h3>{trips.name}</h3>
          <p>{trips.description}</p>
          <p>Planeta: {trips.planet}</p>
          <p>Tempo de viajem: {trips.durationInDays} dias</p>
          <p>Data de Embarque: {trips.date}</p>
          <Button onClick={() => goToApplicationFormPage(navigate)}>
        Inscrever-se
      </Button>
        </CardTrips>
      );
    })
  ) : (
    <p>Erro! Sem viagens</p>
  );

  return (
    <ContainerPai>
      <Headers/>
      <Img src={img}/>
      <Container>
      <h1>Viagens</h1>
      <div>{renderList}</div>
    </Container>
    </ContainerPai>
  );
};

export default ListTripsPage;
