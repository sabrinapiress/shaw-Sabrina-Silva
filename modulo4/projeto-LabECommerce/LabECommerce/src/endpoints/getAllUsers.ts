import { Request, Response } from "express"
import { selectUsers } from "../data/selectUsers"

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        await selectUsers()

        if(!selectUsers){
            throw new Error("Sem usuários!")
        }

        res.status(200).send("OK")

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}