import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { goFeedPage } from "../../Routes/coordinator";
import { login } from "../../services/appAccess";
import loadingGif from "../../assets/loader.gif"
import {
  ContainerForm,
  InputEmail,
  InputSenha,
  Loading,
  LoginButton,
} from "./styled";

export const LoginForm = () => {
  const [form, onChangeInput, clear] = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setIsLoading)
  };

  return (
    <div>
      <ContainerForm onSubmit={onSubmitForm}>
        <InputEmail
          placeholder="E-mail"
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChangeInput}
          required
        />
        <InputSenha
          placeholder="Senha"
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChangeInput}
          required
        />
        <LoginButton type={"submit"}>{isLoading ? <Loading src={loadingGif}/> : <>Continuar</>}</LoginButton>
      </ContainerForm>
    </div>
  );
};
