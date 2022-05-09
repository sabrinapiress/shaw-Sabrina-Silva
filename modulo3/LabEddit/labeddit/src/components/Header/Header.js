import React from "react";
import Logo from "../../assets/logo-2.png";
import { ContainerHeader, ImgLogo, ButtonHeader } from "./styled";
export const Header = () => {
  return (
    <ContainerHeader>
        <ImgLogo src={Logo} />
      <ButtonHeader>Botão</ButtonHeader>
    </ContainerHeader>
  );
};
