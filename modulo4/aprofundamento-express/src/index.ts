import express, { Request, response, Response } from 'express'
import cors from 'cors'
import { afazeres} from './data';
import { send } from 'process';

const app = express();

app.use(express.json());
app.use(cors());

type StrinOrNumber = string | number
type Boolean = boolean

export type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

app.get("/ping", (req, res)=>{
    res.send("pong")
})

app.get("/afazeres", (req, res)=> {
    const tarefas = afazeres.filter((tarefa)=>{
      if(tarefa.completed === false)
      return tarefa
         
    })
    res.send(tarefas)
})

app.post("/criar-afazeres", (req, res)=>{
    const {userId, id, title, completed }: Afazer = req.body
    console.log(typeof userId);
    
    // if(typeof(userId)!== "number"){
    //     response.send("Erro! Parametro faltando ou invalido")
    // }

    afazeres.push({userId, id, title, completed }) 
    
    res.status(201).send(afazeres)
})

app.put("/editar-afazeres/:id", (req, res)=> {
    const idTafera:number = Number( req.params.id)
        afazeres.find((tarefa)=>{
        if(idTafera === tarefa.id)
        return tarefa.completed = req.body.completed
           
      })
      res.send({afazeres})
})


app.delete("/deletar-afazeres/:id", (req, res)=>{
    const idTarefa:number = Number( req.params.id)
    const tarefas =  afazeres.filter((tarefa)=>{
        return idTarefa !== tarefa.id
    
    })
    res.send(tarefas)
})

app.get("/afazeres-por-id/:id", (req, res)=>{
    const idTarefa:number = Number( req.params.id)
  const tarefas = afazeres.filter((tarefa)=>{
        if(idTarefa === tarefa.id){
            return tarefa
        }
    })
    // if(!tarefas){
    //    res.status(400).send("Erro! Usuário não encontrado")
    // }
    res.send(tarefas)
})

app.listen(3003, function () {
    console.log("Server is running in locahost:3003 !");
});