import axios from "axios";
import { BASE_URL } from "../constant/urls";

export const postVote = (id) =>{
    const body={
      direction: 1
    }
    axios
    .post (`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      }
    })
    .then((res)=>{
      alert("Voto computado.",res.data);
    }).catch((err)=>{
      alert("Erro! Tente novamente.",err.data);
    })
  }

 export const putVote = (id)=> {
    const body={
      direction: -1
    }
    axios
    .put(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      }
    })
    .then((res)=>{
      alert("Voto computado.",res.data);
    }).catch((err)=>{
      alert("Erro! Tente novamente.",err.data);
    })
  }

 export const delVote = (id) => {
    axios
    .delete(`${BASE_URL}/posts/${id}/votes`,{ 
      headers: {
        Authorization: window.localStorage.getItem("token"),
      }
    })
    .then((res)=>{
      window.confirm("Deseja deletar seu voto?",res.data);
    }).catch((err)=>{
      alert("Erro! Tente novamente.",err.data);
    })
  }