
function trocaString(string:string):any{
    const fraseSplit:Array<any>= string.split("")
    const fraseReverse:Array<any>= fraseSplit.reverse()
    const fraseJoin:string= fraseReverse.join("")
    return( fraseJoin)
}

console.log(trocaString("abcd"));