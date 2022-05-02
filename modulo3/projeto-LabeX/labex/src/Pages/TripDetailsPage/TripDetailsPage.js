import { Container, CardTrips} from "./style";
import { useNavigate, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { url, token, useProtectedPage} from "../../constant/constants";
import { Headers } from "../../components/Header";

const TripDetailsPage = ()=> {
const [tripListDetail, setTripListDetail] = useState({})
const [candidatos, setCandidados] = useState([{}])
const [aprovados, setAprovados] = useState([{}])
const navigate = useNavigate()
const params = useParams()
useProtectedPage()

console.log(params);

const getTripDetail = async () => {
  axios
  .get(`${url}/trip/${params.id}`, {headers:{auth:token}})
  .then((res)=>{
    setTripListDetail(res.data.trip)
  })
  .catch((err)=>{
    alert("Erro!", err.res)
  })
  .finally(()=>{
    console.log("Foi!");
  })
}

const getCandidatos = async() => {
  axios
  .get(`${url}/trip/${params.id}`, {
    headers:{
      auth:token
    }})
    .then((res)=>{
      setCandidados(res.data.trip.candidates)
    })
    .catch((err)=>{
      alert("Erro! Sem candidatos.", err.response)
    })
}

const getAprovados = async () => {
  axios
  .get(`${url}/trip/${params.id}`, {
    headers:{
      auth:token
    }})
    .then((res)=>{
    setAprovados(res.data.trip.approved)
    })
    .catch((err)=>{
      alert("Erro! Sem candidatos para aprovar.", err.response)
    })
}

const candidatoAprovado = async(id) => {
  const body = {
    approve: true
  }
  axios
  .put(`${url}/trips/${params.id}/candidates/${id}/decide`, body, {
    headers:{
      auth:token
    }})
  .then(()=>{
    alert("Usuário aprovado!")
    getCandidatos()
    getAprovados()
  })
  .catch((err)=>{
    alert("Erro! Não aprovado.", err.response)
  })
}

const candidatoReprovado = async(id) =>{
  const body = {
    approve: false
  }
  axios
  .put(`${url}/trips/${params.id}/candidates/${id}/decide`, body, {
    headers:{
      auth:token
    }})
  .then(()=>{
    alert("Usuário reprovado!")
    getCandidatos()
    getAprovados()
  })
  .catch((err)=>{
    alert("Erro Reprovado!", err.response)
  })
}

  useEffect(()=>{
    getTripDetail()
    getCandidatos()
    getAprovados()
  }, [])

  const renderCandidatos = candidatos ? (candidatos.map((candidato)=>{
    return(
      <CardTrips key={candidato.id}>
        <p><b>Nome: </b>{candidato.name}</p>
        <p><b>Idade:</b> {candidato.age}</p>
        <p><b>Texto de Candidatura: </b>{candidato.applicationText}</p>
        <p><b>Pais:</b> {candidato.country}</p>
        <p><b>Profissão:</b> {candidato.profession}</p>
        <button onClick={()=> candidatoAprovado(candidato.id)}>Aprovar</button> 
        <button onClick={()=> candidatoReprovado(candidato.id)}>Reprovar</button>
      </CardTrips>
    )
  })
  ) : (
    <p>Sem candidatos</p>
  )

  const renderCandidatosAprovados = aprovados.map((candidato)=>{
    return(
      <CardTrips key={candidato.id}>
        <p><b>Nome: </b>{candidato.name}</p>
      </CardTrips>
    )
  })
    return (
      <div>
      <Headers/>
      <Container>
        <h1>Viagens</h1>
        <CardTrips>
          <p><b>Nome:</b> {tripListDetail.name}</p>
          <p><b>Data: </b>{tripListDetail.date}</p>
          <p><b>Descrição:</b> {tripListDetail.description}</p>
          <p><b>Duração: </b>{tripListDetail.durationInDays}</p>
        </CardTrips>
        <h1>Candidatos</h1>
        {renderCandidatos}
        <h4>Candidatos Aprovados</h4>
        {renderCandidatosAprovados}
      </Container>
      </div>
    );
  }
  
  export default TripDetailsPage;