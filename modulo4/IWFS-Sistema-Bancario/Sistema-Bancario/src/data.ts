import { Pessoa } from "./index"

export const pessoas: Pessoa[] = [
    {
        nome: "Luiz",
        cpf: 78952863282,
        nascimento:"10-07-1993",
        saldo: 4000,
        extrato: [
            {
                valor: 400,
                data: "22-12-2021",
                descricao: "deposito"
            },
            {
                valor: 100,
                data: "15-01-2022",
                descricao: "deposito"
            }
        ]
    },
    {
        nome: "Bianca",
        cpf: 52947523698,
        nascimento: "30-11-1999",
        saldo: 8500,
        extrato: [
            {
                valor: 1300,
                data: "03-03-2022",
                descricao: "deposito"
            },
            {
                valor: 700,
                data: "31-05-2022",
                descricao: "deposito"
            },
            {
                valor: 2000,
                data: "02-06-2022",
                descricao: "deposito"
            }
        ]
    }
]