import { Container } from "./style";
import { useNavigate } from "react-router-dom"
import { goBack,} from "../../routes/coordinator";
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
  const onSubmit = (event) => {
    event.preventDefault()
    onSubmitLogin()
  }

    return (
      <Container>
       <h1>Login</h1>
       <form onSubmit={onSubmit}>
       <input placeholder="E-mail" 
       type ="email"
       value={email}
       onChange={onChangeEmail}
       required
      //  pattern= {"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"} tite="E-mail invalido!"
       />
       <input placeholder="Senha"
        type ="password"
        value={senha}
        onChange={onChangeSenha}
        required
        pattern={"^.{5,}"}
        title={"Senha deve conter mais de 8 digitos"}
        />
       
       <button >Entrar</button>
       </form>
       <button onClick={() => goBack(navigate)}>Voltar</button>
      </Container>
    );
  }
  
  export default LoginPage;