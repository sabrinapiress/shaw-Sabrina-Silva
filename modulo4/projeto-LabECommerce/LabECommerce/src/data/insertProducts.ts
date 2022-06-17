import { Products } from "../types/typeProducts"
import connection from "./connection"

export const insertProducts = async (product: Products) => {
    const {id,name, price, image_url} = product
    console.log(product)
    await connection("labecommerce_products")
    .insert({id,name, price, image_url})
}