import express from 'express'
import cors from 'cors'
import { pessoas } from './data'

const app = express()
app.use(express.json())
app.use(cors())

type StringOrNumber = string | number
type Data = Date | number | string

type Extrato = {
  valor: number,
  data: StringOrNumber,
  descricao: string
}
export type Pessoa = {
  nome: string,
  cpf: number,
  nascimento: Data,
  saldo: number,
  extrato: Extrato[]
}

app.get("/contas", (req, res) => {
  try {
    pessoas.map((pessoa) => {
      return pessoa
    })
    if (!pessoas) {
      throw new Error("Sem contas no momento")
    }
    res.status(200).send(pessoas)
  } catch (error: any) {

    res.status(error).send({ message: error.message });
  }
})

app.post("/conta/criar-conta", (req, res) => {
  try {
    const { nome, cpf, nascimento } = req.body
    const newDate = new Date(nascimento)
    const data = Math.floor((Date.now() - newDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
    const saldo: number = 0
    const extrato: Extrato[] = [
      //   {
      //     valor:0,
      //     data: 0,
      //     descricao:""
      // }
    ]
    if(data < 18){
      throw new Error("Idade não autorizada")
    }
    pessoas.push({ nome, cpf, nascimento, saldo, extrato })

    res.status(200).send(pessoas)
  } catch (error: any) {
    switch (error.message) {
      case "Idade não autorizada":
        res.status(403)
        break
      default:
        res.status(500)
        error.message("Erro inesperado de servidor")
        break
    }
    res.send(error.message)
  } 
})

app.get("/saldo/:cpf", (req, res) => {
  try {
    const cpf: number = Number(req.params.cpf)
    if(!cpf){
      throw new Error("CPF invalido.")
    }
    const filterPessoa = pessoas.filter((pessoa) => {
      if (pessoa.cpf === cpf) {
        return pessoa
      }
    })

    const saldo = filterPessoa.map((saldo)=>{
      return saldo.saldo
    })

    res.status(200).send(saldo)
  } catch (error: any) {
    switch (error.message) {
      case "CPF invalido.":
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

app.put("/deposito", (req,res)=>{
  try{
    const {nome, cpf, valor} = req.body
    const pessoasFilter = pessoas.filter((pessoa)=>{
      if(nome === pessoa.nome && cpf === pessoa.cpf)
      return pessoa
    })
    
    const saldoDeposito = pessoasFilter.map((saldo)=>{
      return saldo.saldo + valor
    })

    res.status(200).send(saldoDeposito)
  }catch(error:any){

  }
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
