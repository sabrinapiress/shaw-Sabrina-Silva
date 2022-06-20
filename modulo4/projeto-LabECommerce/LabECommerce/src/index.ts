import app from "./app"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getPurchaseByIdEndpoint } from "./endpoints/getPurchaseByIdEndpoint"
import { postCreateProducts } from "./endpoints/postCreateProducts"
import { postCreatePurchase } from "./endpoints/postCreatePurchases"
import { postCreateUsers } from "./endpoints/postCreateUsers"

app.post("/create-user", postCreateUsers)

app.get("/users", getAllUsers)

app.post("/create-products", postCreateProducts)

app.get("/products", getAllProducts)

app.post("/purchase", postCreatePurchase)

app.get("/user/:user_id/purchase", getPurchaseByIdEndpoint)