import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/sabrina-pires-shaw";

export const useProtectedPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      alert("Usuario não logado. Faça seu login para continuar!");
      navigate("/Login");
    }
  }, []);
};
