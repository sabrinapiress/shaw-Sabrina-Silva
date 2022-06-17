import { AddressInfo } from "net";
import app from "./app";
import { getAddress } from "./endpoints/getAddress";
import { insertAddressEndpoint } from "./endpoints/insertAddressEndpoint";

app.post("/user/:cep",insertAddressEndpoint)

app.get("/endereco/:cep", getAddress)