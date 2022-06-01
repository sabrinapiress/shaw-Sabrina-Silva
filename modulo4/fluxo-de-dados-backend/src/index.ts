import express from 'express'
import cors from 'cors'
import { produtos } from './data'

const app = express()
app.use(express.json())
app.use(cors())

export type Produto = {
    id: string,
    name: string,
    price: number
}

//Ex1
app.get("/teste", (req, res) => {
    res.send("Teste OK!")
})

//Ex3 e Ex7
app.post("/adicionar-produto", (req, res) => {
    try {
        const { name, price } = req.body
        const id:string = Math.floor(Date.now() * Math.random()).toString(36)

        if(req.body.name !== String(req.body.name) || req.body.price !== Number(req.body.price) || req.body.price < 0){
            throw new Error("Campo invalido")
        }

        if (!name || !price) {
            // res.status(401)
            throw new Error("Campo vazio")
        }

        produtos.push({ id, name, price })
        
        res.status(201).send(produtos)

    } catch (error: any) {
        // res.send(error.message)
        switch (error.message) {
            case "Campo vazio":
                res.status(401)
                break
            case "Campo invalido":
                res.status(401)
                break
            default:
                res.status(500)
                error.message("Erro inesperado de servidor")
                break
        }
        res.send(error.message)
    }
})

//Ex4 e Ex8
app.get("/produtos", (req, res) => {
    try {
        const listaProdutos:Produto[] = produtos.map((produto) => {
            return produto
        })

        if (!listaProdutos) {
            throw new Error("Sem produtos!")
        }
        res.status(200).send(listaProdutos)
    } catch (error: any) {
        switch (error.message) {
            case "Sem produtos!":
                res.status(400)
                // error.message("Sem produtos!")
                break
            default:
                res.status(500)
                error.message("Erro inesperado de servidor")
                break
        }
    }
})


app.put("/produtos/:id", (req, res) => {
    try {
        const price: number = Number(req.body.price)
        const idProduto = req.params.id

        if (!price) {
            throw new Error("Campo de atualizar preço vazio.")
        }

        if (req.body.price < 0  || req.body.price !== Number(req.body.price) ) {
            throw new Error("Valor invalido")
        }

        if (!idProduto) {
            throw new Error("Id não encontrado.")
        }

        const editProduto = produtos.find((produto) => {

            if (produto.id === idProduto)
                return produto.price = price
        })
        
        if (!editProduto) {
            throw new Error("Produto não encontrado!")
        }

        res.status(200).send(editProduto)

    } catch (error: any) {
        switch (error.message) {
            case "Campo de atualizar preço vazio.":
                res.status(422)
                break
            case "Id não encontrado.":
                res.status(400)
                break
            case "Produto não encontrado!":
                res.status(422)
                break
            case "Valor invalido":
                res.status(422)
                break
            default:
                res.status(500)
                error.message("Erro inesperado de servidor")
                break
        }
        res.send(error.message)
    }
})

app.delete("/deletar-produto/:id", (req, res) => {
    try {
        const idProduto = (req.params.id)

        if (!idProduto) {
            throw new Error("Id invalido.")
        }

        const listaProdutos = produtos.filter((produto) => {
            return idProduto !== produto.id
        })

        if (!listaProdutos) {
            throw new Error("Erro! Sem produtos.")
        }

        res.status(200).send(listaProdutos)
    } catch (error: any) {
        switch (error.message) {
            case "Id invalido.":
                res.status(400)
            case "Erro! Sem produtos.":
                res.status(400)
            default:
                res.status(500)
                error.message("Erro inesperado de servidor")
                break
        }
    }
})

app.listen(3003, () => {
    console.log("Server is running");
});