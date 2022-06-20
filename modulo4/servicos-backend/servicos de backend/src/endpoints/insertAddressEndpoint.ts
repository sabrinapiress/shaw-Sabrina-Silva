import { Request, Response } from "express"
import insertAdress from "../data/insertAddress"
import { getFullAdress } from "../services/getFullAddress"

export const insertAddressEndpoint = async (req:Request, res: Response) => {
    try{
        const cep = req.params.cep

        const address = await getFullAdress(cep)

        if(!address){
            throw new Error("CEP invalido.")
        }
        await insertAdress(address)

        res.status(201).send("Endereço adicionado.")
        
    }catch (error:any){
        console.log(error.sqlMessage);
        console.log(error.message)
        
        res.status(400).send(error.message)
    }
}
