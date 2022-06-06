import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLoginPage } from "../Routes/coordinator";

export const useProtectedPage = () =>{
    const navigate = useNavigate()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            goToLoginPage(navigate)
        }
    }, [navigate])
}

//hook para deixar as paginas disponivel mediante a tooken.