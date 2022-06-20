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

    if (req.body.nome !== String(req.body.nome) || req.body.cpf !== Number(req.body.cpf) || req.body.nascimento !== String(req.body.nascimento)) {
      throw new Error("Campo com informação invalida, verifique o conteúdo.")
    }
    if (data < 18) {
      throw new Error("Idade não autorizada.")
    }
    pessoas.push({ nome, cpf, nascimento, saldo, extrato })
    if (!pessoas) {
      throw new Error("Contas não encontradas.")
    }
    res.status(200).send(pessoas)
  } catch (error: any) {
    switch (error.message) {
      case "Campo com informação invalida, verifique o conteúdo.":
        res.status(422)
        break
      case "Idade não autorizada.":
        res.status(403)
        break
      case "Contas não encontradas.":
        res.status(400)
        break
      default:
        res.status(500)
        error.message("Erro inesperado de servidor.")
        break
    }
    res.send(error.message)
  }
})

app.get("/saldo/:cpf", (req, res) => {
  try {
    const cpf: number = Number(req.params.cpf)
    if (!cpf || cpf !== Number(req.params.cpf)) {
      throw new Error("CPF invalido.")
    }
    const filterPessoa = pessoas.filter((pessoa) => {
      if (pessoa.cpf === cpf) {
        return pessoa
      }
    })
    if (!filterPessoa) {
      throw new Error("Conta não encontrada.")
    }

    const saldo = filterPessoa.map((saldo) => {
      return saldo.saldo
    })

    if (!saldo) {
      throw new Error("Saldo não encontrado.")
    }

    res.status(200).send(saldo)
  } catch (error: any) {
    switch (error.message) {
      case "CPF invalido.":
        res.status(422)
        break
      case "Conta não encontrada.":
        res.status(400)
        break
      case "Saldo não encontrado.":
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

app.put("/deposito", (req, res) => {
  try {
    const { nome, cpf, valor } = req.body
    const extratoDeposito = {
      valor: valor,
      data: Date(),
      descricao: "Depósito de dinheiro"
    }

    const pessoasFilter:typeof pessoas = pessoas.filter((pessoa) => {
      if (nome === pessoa.nome && cpf === pessoa.cpf) {
        return pessoa
      }
    })

    const saldoDeposito = pessoasFilter.map((saldo) => {
      const novoSaldo = saldo.saldo + valor
      return novoSaldo
    })
    
    const extrato =  pessoas.filter((user)=>{
      if (nome === user.nome && cpf === user.cpf) 
        return user.extrato.push(extratoDeposito) 
  })
   
    //   if (nome !== pessoasFilter.nome || cpf !== pessoasFilter.cpf){
    //     throw new Error("Nome ou CPF inválidos.")
    // }

    if (!pessoasFilter) {
      throw new Error("Conta não encontrada.")
    }
    if (req.body.nome !== String(req.body.nome) || req.body.cpf !== Number(req.body.cpf) || req.body.valor !== Number(req.body.valor)) {
      throw new Error("Campo com informação invalida, verifique o conteúdo.")
    }
    // const extratos = saldoDeposito.map((extrato) => {
      
    //   return extrato.push(extratoDeposito)
    // })

    if (!saldoDeposito) {
      throw new Error("Saldo indisponivel.")
    }

    res.status(200).send([ saldoDeposito, extrato])
  } catch (error: any) {
    switch (error.message) {
      case "Campo com informação invalida, verifique o conteúdo.":
        res.status(422)
        break
      case "Conta não encontrada.":
        res.status(400)
        break
      case "Saldo indisponivel.":
        res.status(400)
        break
      case "Nome ou CPF inválidos.":
        res.status(422)
        break
      default:
        res.status(500)
        error.message("Erro inesperado de servidor.")
        break
    }
    res.send(error.message)
  }
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
