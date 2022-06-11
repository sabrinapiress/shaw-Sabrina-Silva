// EXERCICIO 6

//  Pensando em aumentar seu lucros, o banco quer identificar possíveis
//  clientes precisando de empréstimos. Dessa forma, a sua tarefa é criar 
//  uma função que receba este array como parâmetro, atualize o saldo total 
//  descontando todos os  débitos e retorne apenas os clientes com saldo negativo.

type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}
const clientes: Cliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const verificaEmprestimo = (arrays:Cliente[]) => {
    const clientesFiltrados:Cliente[]=arrays.filter((cliente)=>{
        const saldo:number = cliente.saldoTotal
        const debito:number[] = cliente.debitos
        const totalDeDebitos = debito.reduce((saldo:number, array):number => saldo - array, 0)
        const resultado:number = saldo + totalDeDebitos
        if(resultado <= 0){
            console.table(`O cliente ${cliente.cliente}, possui o saldo de: ${cliente.saldoTotal} e seus ultimos debitos foram ${cliente.debitos}. Tendo o valor sem debitos: ${resultado}`)
        }
        
    })
    return clientesFiltrados
}

verificaEmprestimo(clientes)

