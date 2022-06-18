import connection from "./connection";

export const getPurchaseById =async (id:string) => {
    const result = await connection("labecommerce_purchases")
    .innerJoin("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")
    .innerJoin("labecommerce_products", 'labecommerce_products.id', "labecommerce_purchases.product_id")
    .select(["labecommerce_users.id","labecommerce_users.name","labecommerce_users.email",
        "labecommerce_products.name_product", "labecommerce_products.price", "labecommerce_products.image_url",
        "labecommerce_purchases.quantity", "labecommerce_purchases.total_price"])
    .where({"labecommerce_users.id": id})

    console.log(result)

    return result
}