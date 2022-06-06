import React from "react";
import { Header, Logo, Title, I } from "./style";
import { useNavigate } from "react-router-dom"
import { goToHomePage, goBack } from "../routes/coordinator";
import gif1 from "../assets/gif1.gif"

export const Headers = () => {
    const navigate = useNavigate()
  return (
    <Header>
      <Logo onClick={() => goToHomePage(navigate)} src={gif1} />
      <Title>
        Labe
        <span>
          {" "}
          <I>X</I>
        </span>{" "}
        Viagens
      </Title>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </Header>
  );
};
