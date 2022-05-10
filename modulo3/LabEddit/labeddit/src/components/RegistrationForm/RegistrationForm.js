import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { cadastro } from "../../services/appAccess";
import {
    B,
  ContainerForm,
  ContractP,
  InputEmail,
  InputName,
  InputSenha,
  LoginButton,
} from "./styled";

export const RegistrationForm = () => {
  const [form, onChangeInput, clear] = useForm({ username: "", email: "", password: "" });

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
        <div>
        <ContractP>
          Ao continuar, você concorda com o nosso <B>Contrato de usuário</B> e
          nossa <B>Política de Privacidade</B>
        </ContractP>
      </div>
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">Eu concordo em receber emails sobre coisas legais do Labeddit</label>
      </div>
        <LoginButton type={"submit"}>Cadastrar</LoginButton>
      </ContainerForm>
    </div>
  );
};
