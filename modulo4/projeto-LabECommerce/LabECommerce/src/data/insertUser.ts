import { User } from "../types/typeUser"
import connection from "./connection"

export const insertUser = async (user:User) =>{
    const {id,name,email,password} = user
    
    await connection("labecommerce_users")
    .insert({id,name,email,password})
}