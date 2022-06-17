import app from "./app"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getAllUsers } from "./endpoints/getAllUsers"
import { postCreateProducts } from "./endpoints/postCreateProducts"
import { postCreateUsers } from "./endpoints/postCreateUsers"

app.post("/create-user", postCreateUsers)

app.get("/users", getAllUsers)

app.post("/create-products", postCreateProducts)

app.get("/products", getAllProducts)