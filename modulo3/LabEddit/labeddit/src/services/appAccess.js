import axios from "axios";
import { useContext } from "react";
import { BASE_URL } from "../constant/urls";
import { GlobalContext } from "../global/GlobalContext";
import { goFeedPage } from "../Routes/coordinator";

// const { rightButton, setRightButton} =  useContext(GlobalContext);

export const login = async (body, clear, navigate) => {
  try {
    const res = await axios.post(`${BASE_URL}/users/login`, body);
    localStorage.setItem("token", res.data.token);
    clear();
    goFeedPage(navigate)
    // setRightButton("Logout")
  } catch (err) {
    alert("Erro! Usuário ou senha não cadastrados.", err.response.data.message);
    clear();
  }
};

export const cadastro = async (body, clear, navigate) => {
  try {
    const res = await axios.post(`${BASE_URL}/users/signup`, body);
    localStorage.setItem("token", res.data.token);
    alert("Bem vindo(a)! Usuário cadastrado.", res);
    clear();
    goFeedPage(navigate)
  } catch (err) {
    alert("Erro, tente novamente.",err.response.data);
    clear();
  }
};
