import { Request, Response } from "express"
import { insertProducts } from "../data/insertProducts"
import {id} from "../services/id"
export const postCreateProducts = async (req:Request, res:Response) => {
    try{
        const {name, price, image_url} = req.body

        if (name !== String(name) || price !== Number(price) || image_url !== String(image_url) || id !== String(id)) {
            throw new Error("Valores invalidos!")
        }
    
        if (!name || !price || !image_url || !id) {
            throw new Error("Campo vazio!")
        }

        await insertProducts({id, name, price, image_url})

        res.status(201).send("Produto adicionado com sucesso!")

    }catch (error:any){
        console.log(error.sqlMessage);
        console.log(error.message);
        res.status(400).send(error.message)
    }
}