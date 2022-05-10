import React from "react";
import { Header } from "../../components/Header/Header";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { TitleRegistration } from "./styled";

export const RegistrationPage = () => {
  useUnprotectedPage()
  return (
    <div>
      <Header />
      <TitleRegistration>Olá, boas vindas ao LabEddit ;) </TitleRegistration>
      <RegistrationForm />
    </div>
  );
};
