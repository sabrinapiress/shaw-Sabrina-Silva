import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { cadastro } from "../../services/appAccess";
import loadingGif from "../../assets/loader.gif"
import {
    B,
  CheckBox,
  ContainerForm,
  ContractP,
  InputEmail,
  InputName,
  InputSenha,
  LoginButton,
} from "./styled";
import { Loading } from "../LoginForm/styled";

export const RegistrationForm = () => {
  const [form, onChangeInput, clear] = useForm({ username: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault();
    cadastro(form, clear, navigate)
  };

  return (
    <div>
      <ContainerForm onSubmit={onSubmitForm}>
      <InputName
          placeholder="Nome"
          type={"text"}
          name={"username"}
          value={form.name}
          onChange={onChangeInput}
          required
        />
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
        <ContractP>
          Ao continuar, você concorda com o nosso <B>Contrato de usuário</B> e
          nossa <B>Política de Privacidade</B>
        </ContractP>
      <CheckBox>
        <input type="checkbox" id="horns" name="horns" required/>
        <label for="horns">Eu concordo em receber emails sobre coisas legais do Labeddit</label>
      </CheckBox>
        <LoginButton type={"submit"}> Continuar</LoginButton>
      </ContainerForm>
    </div>
  );
};
