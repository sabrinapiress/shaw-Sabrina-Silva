import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) =>{
    const token = localStorage.getItem('token')
    const [rightButton, setRightButton] = useState(token ? "Logout" : "Entrar")
    const [isLoading, setIsLoading] = useState(false)

    const states= {rightButton, isLoading}
    const sets = {setRightButton, setIsLoading}
    return(
        <GlobalContext.Provider value={{states, sets, token}}>    
            {props.children}
        </GlobalContext.Provider>
    )
}