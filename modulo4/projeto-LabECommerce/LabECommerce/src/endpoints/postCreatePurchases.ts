import { Request, Response } from "express"
import { getProductId } from "../data/getProductId"
import { getUserId } from "../data/getUserId"
import { insertPurchase } from "../data/insertPurchase"
//import { id } from "../services/id"
import { Purchases } from "../types/typePurchases"

export const postCreatePurchase = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, productId, quantity } = req.body
        
        const id = Math.floor(Date.now() * Math.random()).toString(36)
        
        if (userId !== String(userId) || quantity !== Number(quantity) || productId !== String(productId) || id !== String(id)) {
            throw new Error("Valores invalidos!")
        }

        if (!userId || !quantity || !productId || !id) {
            throw new Error("Campo vazio!")
        }

        const users = await getUserId(userId)

        if (!users) {
            throw new Error("Usuario não encontrado!")
        }

        const product = await getProductId(productId)

        const total = product.price * quantity

        if (!total) {
            throw new Error("Erro ao calcular o total.")

        }

        if (product.length === 0 || !product) {
            res.statusCode = 404
            throw new Error("Produto não encontrado!")
        }

        const purchase: Purchases = {
            id,
            userId,
            productId,
            quantity,
            total
        }

         await insertPurchase(purchase)

        res.status(201).send("Compra finalizada!")

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}