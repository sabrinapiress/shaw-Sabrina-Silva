import { Address } from "../types/Address";
import { connection } from "./connection";

export default async function insertAdress(address: Address) {

    const { logradouro,bairro,cidade,estado} = address

    await connection("address").insert({
        logradouro,
        bairro,
        cidade,
        estado
    })

}