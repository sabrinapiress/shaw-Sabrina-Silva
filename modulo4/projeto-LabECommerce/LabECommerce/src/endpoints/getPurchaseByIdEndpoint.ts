import { Request, Response } from "express"
import { getPurchaseById } from "../data/getPurcharseById"

export const getPurchaseByIdEndpoint =async (req:Request, res: Response) => {
    try{
        const user_id = req.params.user_id

        const result = await getPurchaseById(user_id)
        
        res.status(200).send(["OK", result])
        
    }catch (error:any){
        console.log(error.sqlMessage);
        console.log(error.message);
        res.status(400).send(error.message)
    }
}