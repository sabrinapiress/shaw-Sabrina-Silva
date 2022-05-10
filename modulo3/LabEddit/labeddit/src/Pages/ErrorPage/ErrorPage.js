import React from "react";
import logo from "../../assets/logo-gif.png";
import { Header } from "../../components/Header/Header";
import { ContainerError, ErrorP } from "./styled";

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <ContainerError>
        <img src={logo} />
        <ErrorP>Erro 404 - Página não encontrada</ErrorP>
      </ContainerError>
    </div>
  );
};
