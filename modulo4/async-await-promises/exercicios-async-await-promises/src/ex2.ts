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

//a) Uma tem escrito function, já a outra somente a "=>"

//b) 
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
