import connection from "./connection"

export const getUserId = async (userId: string)=> {

    const [result] = await connection("labecommerce_users")
      .where({ id: userId })
  
    return result
  }