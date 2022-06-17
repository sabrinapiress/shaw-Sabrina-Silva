//EXERCICIO 4
enum Role {
    ADMIN = "admin",
    NORMAL = "user"    
}

type PessoaEx5 = {
name:string,
email:string,
role:Role
}

const pessoasEx5 = [
	{name: "Rogério", email: "roger@email.com", role:Role.NORMAL},
	{name: "Ademir", email: "ademir@email.com", role: Role.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Role.NORMAL},
	{name: "Jéssica", email: "jessica@email.com", role: Role.ADMIN},  
	{name: "Adilson", email: "adilson@email.com", role: Role.NORMAL},  
	{name: "Carina", email: "carina@email.com", role: Role.ADMIN}      
] 

// Considerando o array de usuários abaixo, crie uma função que receba este array como 
// parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 

const pessoasEx5Filtrado = (array: PessoaEx5[]):object[]=> {
    
    const arrayFiltrado:PessoaEx5[] = array.filter((pessoa)=>{
        if(pessoa.role === Role.ADMIN)
        return [pessoa.name, pessoa.email, pessoa.role]
    })
    
return arrayFiltrado
}

console.table(pessoasEx5Filtrado(pessoasEx5))