import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { goFeedPage } from "../../Routes/coordinator";
import { login } from "../../services/appAccess";
import {
  ContainerForm,
  InputEmail,
  InputSenha,
  LoginButton,
} from "./styled";

export const LoginForm = () => {
  const [form, onChangeInput, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate()
  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate)
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
        <LoginButton type={"submit"}>Continuar</LoginButton>
      </ContainerForm>
    </div>
  );
};
