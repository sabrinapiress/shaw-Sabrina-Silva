import axios from "axios";
import { BASE_URL } from "../constant/urls";

export const postVoteComments = (id) =>{
    const body={
      direction: 1
    }
    axios
    .post (`${BASE_URL}/comments/${id}/votes`, body, {
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

 export const putVoteComments = (id)=> {
    const body={
      direction: -1
    }
    axios
    .put(`${BASE_URL}/comments/${id}/votes`, body, {
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

 export const delVoteComments = (id) => {
    axios
    .delete(`${BASE_URL}/comments/${id}/votes`,{ 
      headers: {
        Authorization: window.localStorage.getItem("token"),
      }
    })
    .then((res)=>{
      alert("Voto deletado!",res.data);
    }).catch((err)=>{
      alert("Erro! Tente novamente.",err.data);
    })
  }