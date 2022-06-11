import express from "express"
import cors from 'cors'
import {users} from "./data"
const app = express()

app.use(express.json())
app.use(cors())


type StringOrNumber = string | number

export type Usuarios = {
  id: StringOrNumber,
  name: string,
  phone: number,
  email: string,
  website: string
  posts: Posts[]
}

export type Posts = {
  id:StringOrNumber,
  title: string,
  body: string,
  userId: string
}

app.get('/', (req, res) => {
    res.send('Hello, world!')
  })


app.get('/usuarios', (req, res )=> {
  const userList = users.map((usuarios)=> {
    return usuarios
  }).flat(1)
  res.send(userList)
})

app.get('/usuarios/posts', (req, res)=> {
  const userList = users.map((usuarios)=> {
    return usuarios
  }).flat(1)
  const postsLists = userList.map((post)=>{
    return post.posts
  }).flat(1)
  res.send(postsLists)
})

app.get('/posts/:userId', (req, res)=>{
  const userId = req.params.userId
  const postUser = users.find((user)=>{
    if(user.id === userId){
      return user.posts
    }
  })

  res.send(postUser)
})

app.listen(3003, () => {
    console.log("Rodando");
});