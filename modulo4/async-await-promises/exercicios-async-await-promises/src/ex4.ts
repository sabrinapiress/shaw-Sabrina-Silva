// ---- EXERCICIO 4 ----
//a) Ela é do tipo void, pois seu retorno é vazio.
//b)

import axios from "axios"
import { baseURL } from "./baseURL"

type Body = {
    title: string,
    content: string,
    date: number
}
const body: Body = {
    title: "Hamilton saiu do Frontend",
	content: "Para a alegria de muitos, e a tristeza de alguns, a turma Hamilton está, agora, no backend!",
	date: Date.now()
}

const putNews = async (body:any): Promise<void> =>{
const response = await axios.put(`${baseURL}/news`, 
body)
 console.log(response)

}

const main = async (): Promise<void> => {
    try{
       await putNews(body)
       
    }catch (error:any){
        const resp = error.response?.data || error.message
        console.log(resp)
    }
    }
    
    main()