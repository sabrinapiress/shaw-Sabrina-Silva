import connection from "./connection"

export const selectProducts = async () => {
       const result =  await connection("labecommerce_products")
         .select()
    console.log(result);   
}