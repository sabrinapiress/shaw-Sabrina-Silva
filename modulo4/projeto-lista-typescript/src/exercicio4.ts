//EXERCICIO 4

enum Setores {
MARKETING="marketing",
VENDAS="vendas",
FINANCEIRO="financeiro"
}

type Colaboradores = {
    nome:string,
    salário:number,
    setor:Setores,
    presencial:boolean
}

// Considerando o `array`acima, crie um `ENUM` para os setores e um `type` para as 
// pessoas colaboradoras. Em seguida, crie uma função que receba este `array`como 
// parâmetro e retorne apenas as pessoas do setor de marketing que trabalham 
// presencialmente.

const pessoas:Colaboradores[]=  [
	{ nome: "Marcos", salário: 2500, setor: Setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setores.MARKETING, presencial: true }
]

const retornaMarketing = (array:Colaboradores[]): object[]=>{
const arrayFiltrado:Colaboradores[]= array.filter((colaborador)=>{

    if(colaborador.setor === Setores.MARKETING && colaborador.presencial === true){
        return [colaborador.nome, colaborador.salário, colaborador.setor, colaborador.presencial]
    }
})

return arrayFiltrado
}

console.log(retornaMarketing(pessoas))