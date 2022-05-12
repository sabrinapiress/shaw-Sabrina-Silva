import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-2.png";
import { GlobalContext } from "../../global/GlobalContext";
import {goToLoginPage } from "../../Routes/coordinator";
import { ContainerHeader, ImgLogo, ButtonHeader } from "./styled";

export const Header = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Entrar")
  // const { rightButton, setRightButton} =  useContext(GlobalContext);

  const logout = () => {
    localStorage.removeItem('token')
  }

  const rightButtonAction = () =>{
    if(token){
      logout()
      setRightButton("Entrar")
      goToLoginPage(navigate)
    }else {
      goToLoginPage(navigate)
    }
  }
  return (
    <ContainerHeader>
        <ImgLogo src={Logo} />
      <ButtonHeader onClick={rightButtonAction}>{rightButton}</ButtonHeader>
    </ContainerHeader>
  );
};
