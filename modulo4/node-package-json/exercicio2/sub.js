//Exercicio 2
const a = Number(process.argv[2])
const b = Number(process.argv[3])

const sub = (c,d)=>{
 const operacao = c - d
 return operacao
}

console.log(sub(a, b));
