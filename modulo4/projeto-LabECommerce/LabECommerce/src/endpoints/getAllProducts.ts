import { Request, Response } from "express"
import { selectProducts } from "../data/selectProducts"

export const getAllProducts = async (req:Request, res:Response) => {
    try{
        await selectProducts()

        if(!selectProducts){
            throw new Error("Sem usuários!")
        }

        res.status(200).send("OK")

    }catch(error:any){
        res.status(400).send(error.message)
    }
}