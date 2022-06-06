//Exercicio 1
//a) temos que passar os valores desejados por script, assim conseguimos ter acesso a ele pelo terminal

//b)

const nome=  process.argv[2]
const idade= Number(process.argv[3])
const idadeFutura = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}`);
