// ----- EXERCICIO 6 ------
//a) O promise.all resolve nossos problemas da função assincrona, pois ela sempre espera algo ser terminado de executar
//para fazer a execução da proxima linha, que em uma aplicação grande pode levar muito tempo para ser concluido.

//b)Como disse antes, otimizaria nosso tempo de requisição.

//c)
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


const notifyUser  = async (ids:string[]) => {
        try{
            const req = ids.map(id => 
                axios.post(`${baseURL}/notifications`, {
                subscriberId: id,
                message: "Olá, há uma nova notícia em nosso site"
            }))
            await Promise.all(req)
            console.log("Notificação enviada");
        }catch (error:any){
            console.log("Erro!");

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

