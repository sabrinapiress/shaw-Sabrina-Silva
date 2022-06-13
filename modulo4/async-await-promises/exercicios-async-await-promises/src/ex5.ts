// ---- EXERCICIO 5 ----

import axios from "axios"
import { baseURL } from "./baseURL"

type subscriber = {
    id: string,
    name: string,
    email: string
}

const getSubs = async (): Promise<subscriber[]> =>{
const response = await axios.get(`${baseURL}/subscribers`)
return response.data
}

const getSubscribersIds = (subscribers: any) => {
    return subscribers.map((subscriber: any) => {
        return subscriber.id
    })
}


const notifyUser  = async (ids:string) => {
    for(const id of ids){
        try{
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: id,
                message: "Olá, há uma nova notícia em nosso site"
            })
            console.log("Notificação enviada");
        }catch (error:any){
            console.log("Erro!");

        }
    }

}

const main = async () => {
try{
    const subscribers = await getSubs()
    const subscribersIds = getSubscribersIds(subscribers)
     await notifyUser(subscribersIds)    
}catch (error:any){
    const resp = error.response?.data || error.message
    console.log(resp)
}
}

main()