import { Request, Response } from "express"
import { insertUser } from "../data/insertUser"

export const postCreateUsers = async(req:Request, res: Response) => {
try{
    const {name, email, password} = req.body

    const id = Math.floor(Date.now() * Math.random()).toString(36)

    if (name !== String(name) || email !== String(email) || password !== String(password) || id !== String(id)) {
        throw new Error("Valores invalidos!")
    }

    if (!name || !email || !password || !id) {
        throw new Error("Campo vazio!")
    }

    await insertUser({id,name,email,password})

    res.status(201).send("Usuários criado com sucesso!")

}catch (error:any){
    res.status(400).send(error.message)
}
}