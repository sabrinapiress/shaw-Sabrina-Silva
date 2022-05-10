import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) =>{
    const token = localStorage.getItem('token')
    const [rightButton, setRightButton] = useState(token ? "Logout" : "Entrar")

    return(
        <GlobalContext.Provider value={{rightButton, setRightButton, token}}>
            
            {props.children}
            
        </GlobalContext.Provider>
    )
}