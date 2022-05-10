import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRegistrationPage } from "../../Routes/coordinator";
import { ContainerTitle, ImgLogo, RegistrationButton } from "./styled";
import Logo from "../../assets/logo-1.png";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const LoginPage = () => {
  const navigate = useNavigate();
  useUnprotectedPage()

  return (
    <div>
      <ContainerTitle>
        <ImgLogo src={Logo} />
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
        <LoginForm />
        <hr></hr>
        <RegistrationButton onClick={() => goToRegistrationPage(navigate)}>
          Cadastrar
        </RegistrationButton>
      </ContainerTitle>
    </div>
  );
};
