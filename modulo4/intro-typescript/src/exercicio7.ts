const dna: string= "ATTGCTGCGCATTAACGACGCGTA"
const rna: string= "UAACGACGCGUAAUUGCUGCGCAU"

const resultado = dna.replace("ATTGCTGCGCATTAACGACGCGTA","UAACGACGCGUAAUUGCUGCGCAU")

console.log(resultado);

function dnaParaRna(dna:string):string{
return dna.replace(/A/g, "U").replace(/T/g,"A").replace(/G/g,"s").replace(/C/g,"G").replace(/s/g,"C")
}

console.log(dnaParaRna("ATTGCTGCGCATTAACGACGCGTA"));
