import connection from "./connection"

export const selectUsers = async () => {
       const result =  await connection("labecommerce_users")
         .select()
    console.log(result);   
}