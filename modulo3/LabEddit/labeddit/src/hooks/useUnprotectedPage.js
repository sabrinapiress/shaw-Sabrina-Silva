import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goFeedPage } from "../Routes/coordinator";

export const useUnprotectedPage = () =>{
    const navigate = useNavigate()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            goFeedPage(navigate)
        }
    }, [navigate])
}