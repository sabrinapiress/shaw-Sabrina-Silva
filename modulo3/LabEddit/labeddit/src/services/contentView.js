import axios from "axios";
import { BASE_URL } from "../constant/urls";

  export const postCreatePost = (body, clear) => {

    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      }
    })
    .then((res)=>{
      alert(res.data);
      clear()
    }).catch((err)=>{
      alert(err.data);
    })
  }


