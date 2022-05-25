import axios from "axios";
import { BASE_URL } from "../constant/urls";

  export const postCreatePost = (body, clear, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      }
    })
    .then((res)=>{
      setIsLoading(false)
      alert(res.data);
      clear()
      window.location.reload()
    }).catch((err)=>{
      setIsLoading(false)
      alert("Erro", err.response.data);
    })
  }


