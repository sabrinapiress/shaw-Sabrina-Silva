import { Container } from "./style";
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/coordinator";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { url, token, useProtectedPage, IdApply } from "../../constant/constants";

const TripDetailsPage = ()=> {
const [tripListDetail, setTripListDetail] = useState([])
const navigate = useNavigate()
useProtectedPage()

console.log(tripListDetail);

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

const getTripDetail = ()=> {
  axios.get(`${url}/trip/VCgd4LjojvSSzlyKJbfD`, {
    headers: {
      auth: token
    }
  })
  .then((res)=>{
    setTripListDetail(res.data.trip)
  })
  .catch((err)=>{
    alert("Erro!", err.response);
  })
  }

  useEffect(()=>{
    getTripDetail()
  }, [])

  const renderId = tripListDetail ? (
    tripListDetail.map((trips) => {
        return <div>{trips.name}</div>
    })
  ) : (
    <p>Erro! Sem viagens</p>
  );
  console.log(renderId);
    return (
      <Container>
          <button onClick={() => goBack(navigate)}>Voltar</button>
      </Container>
    );
  }
  
  export default TripDetailsPage;