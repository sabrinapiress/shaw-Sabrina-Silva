import React from "react";
import { useForm } from "../../hooks/useForm";
import {
  ContainerForm,
  InputEmail,
  InputSenha,
  LoginButton,
} from "./styled";

export const LoginForm = () => {
  const [form, onChangeInput, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
      console.log(form);
    event.preventDefault();
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
