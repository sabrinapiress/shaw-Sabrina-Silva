import connection from "./connection";

export const getProductId = async (productId: string) => {

    const [result] = await connection("labecommerce_products")
        .where({ id: productId })

    return result

}