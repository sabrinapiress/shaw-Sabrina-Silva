import { Purchases } from "../types/typePurchases"
import connection from "./connection"

export const insertPurchase = async (purchase:Purchases) => {

    const {id, userId, productId, quantity, total} = purchase

    console.log(purchase);
    
    await connection("labecommerce_purchases")
    .insert({
        id: id,
        user_id: userId,
        product_id: productId,
        quantity: quantity,
        total_price: total
    })

}