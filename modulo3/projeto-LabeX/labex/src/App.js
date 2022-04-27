import { Router} from "./routes/Router";
import React from "react";

const App = ()=> {
  document.title = "LabeX Viagens"

  // const navigate = useNavigate();
  
  // useProtectedPage = () => {
  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  
  //     if (token === null) {
  //       alert("Usuario não logado. Faça seu login para continuar!")
  //       navigate("/Login");
  //     }
  //   }, []);
  
  // }
  
  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
