import express from 'express'
import cors from 'cors'
import { send } from 'process'

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]


const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req, res) => {
  res.status(200).send("pong!")
})

//Ex1
// a. Qual método HTTP você deve utilizar para isso?
//GET
// b. Como você indicaria a **entidade** que está sendo manipulada?
// /user
app.get("/users", (req, res) => {
  try {
    const usersList = users.filter((user) => {
      return user
    })
    if (!usersList) {
      throw new Error("Users not found");
    }
    res.status(200).send(usersList);

  } catch (error: any) {
    switch (error.message) {
      case "Users not found":
        res.status(400)
        break
      default:
        res.status(500)
        error.message("Erro inesperado de servidor")
        break
    }
    res.send(error.message)
  }
})

//Ex2
// a. Como você passou os parâmetros de type para a requisição? Por quê?
//  Passei como query, 
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// Sim, apenas passando uma validação. Linha 90.

app.get("/user", (req, res) => {
  try {
    const type: string = req.query.type as string;

    const usersList = users.filter((user) => {
      return user.type === type
    })
    
    if (type !== "ADMIN" && type !== "NORMAL") {
      throw new Error("Users not found")
    }
    if (!usersList) {
      throw new Error("Users not found");
    }
    res.status(200).send(usersList);

  } catch (error: any) {
    switch (error.message) {
      case "Users not found":
        res.status(400)
        break
      default:
        res.status(500)
        error.message("Erro inesperado de servidor")
        break
    }
    res.send(error.message)
  }
})

//Ex3
// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// Geralmente o query, porem utilizei o params pois já fiz o Ex2 com query.
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

app.get("/users/:name", (req, res) => {
  try {
    const name: string = req.params.name as string
    if (!name) {
      throw new Error("User name not found");
    }
    const usersList = users.find((user) => {
      return user.name === name
    })

    if (!usersList) {
      throw new Error("Users not found");
    }
    res.status(200).send(usersList);

  } catch (error: any) {
    switch (error.message) {
      case "Users not found":
        res.status(400)
        break
      case "User name not found":
        res.status(400)
      default:
        res.status(500)
        error.message("Erro inesperado de servidor")
        break
    }
    res.send(error.message)
  }
})

//Ex4
// a. Mude o método do endpoint para `PUT`. O que mudou?
// Nada mudou
// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
// Não pois, ele serve alterar e não adicionar.

app.post("/users", (req, res) => {
  try {
    const { name, email, type, age } = req.body
    const id: number = Math.floor(Date.now() * Math.random())

    if (req.body.name !== String(req.body.name) || req.body.email !== String(req.body.email) || req.body.type !== String(req.body.type) || req.body.age !== Number(req.body.age)) {
      throw new Error("Please check the fields!")
    }

    if (req.body.type !== "ADMIN" && req.body.type !== "NORMAL") {
      throw new Error("Please check the fields!")
    }

    if (id !== Number(id)) {
      throw new Error("Server error")
    }

    users.push({ id, name, email, type, age })

    if (!users) {
      throw new Error("Users not found");
    }
    res.status(201).send(users)

  } catch (error: any) {
    switch (error.message) {
      case "Please check the fields!":
        res.status(422)
        break
      case "Server error":
        res.status(500)
        break
      case "Users not found":
        res.status(400)
        break
      default:
        res.status(500)
        error.message("Erro inesperado de servidor")
        break
    }
    res.send(error.message)
  }
})


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
