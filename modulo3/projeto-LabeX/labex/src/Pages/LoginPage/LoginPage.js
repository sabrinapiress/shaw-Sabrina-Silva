import { Container } from "./style";
import { useNavigate } from "react-router-dom"
import { goBack, goToAdiminHomePage } from "../../routes/coordinator";
import React, {useState} from "react";
import axios from "axios"
import { url } from "../../constant/constants";

const LoginPage = ()=> {
  const navigate = useNavigate()
  const [email, setEmail] = useState ("")
  const [senha, setSenha] = useState ("")

  const onChangeEmail = (event) =>{
    setEmail(event.target.value)
  }

  const onChangeSenha = (event) => {
    setSenha(event.target.value)
  }

  const onSubmitLogin = () => {
    console.log(email,senha);
    const body = {
      email: email,
      password: senha
    }
    axios
    .post(`${url}/login`, body)
    .then((response)=> {
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token)
      navigate("/Area-Adiministrador")
    })
    .catch((err)=>{
     alert("Senha ou Usuario não cadastrados!",err.response);
    })
  }

    return (
      <Container>
       <h1>Login</h1>
       <input placeholder="E-mail" 
       type ="email"
       value={email}
       onChange={onChangeEmail}
       />
       <input placeholder="Senha"
        type ="password"
        value={senha}
        onChange={onChangeSenha}
        />
       <button onClick={() => goBack(navigate)}>Voltar</button>
       <button onClick={onSubmitLogin}>Entrar</button>
       {/* <button onClick={() => goToAdiminHomePage(navigate)}>Entrar</button> */}
      </Container>
    );
  }
  
  export default LoginPage;