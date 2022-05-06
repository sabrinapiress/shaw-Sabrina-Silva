import React ,{ useEffect , useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/sabrina-pires-shaw";

export const useProtectedPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      alert("Usuario não logado. Faça seu login para continuar!");
      navigate("/Login");
    }
  }, []);
};

export const lugares = [
  "Vênus",
  "Marte",
  "Júpter",
  "Saturno",
  "Urano",
  "Netuno",
  "Estrela T Tauri",
  "Sistema Planetario Kepler-18",
  "Quasar APM 08279+5255"
]

export const token = localStorage.getItem('token')

export const IdApply = ()=>{
  const [tripList, setTripList] = useState([]);

  const getTrip = () => {
    axios
      .get(`${url}/trips`)
      .then((res) => {
        setTripList(res.data.trips);
      })
      .catch((err) => {
        alert("Erro!", err);
      });
  };

  useEffect(() => {
    getTrip();
  }, []);

  const renderId = tripList ? (
    tripList.map((trips) => {
        return trips.id
    })
  ) : (
    <p>Erro! Sem viagens</p>
  );

  renderId()

}