import axios from "axios"
import { baseURL } from "./baseURL"

//a) Não.
//b) Sim caso seja um array, caso contrario não, pois como o typo está como any 
//a nossa função fica suscetível ao erro.

//c)

type subscriber = {
    id: string,
    name: string,
    email: string
}

const getSubs = async (): Promise<subscriber[]> =>{
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((res: any)=>{
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

const main = async () => {
    try{
        const subscribers = await getSubs()
        console.log(subscribers);
        
    }catch (error:any){
        const resp = error.response?.data || error.message
        console.log(resp)
    }
    }
    
    main()