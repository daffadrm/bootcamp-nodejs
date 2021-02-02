let z = "";
function deretSatu(k){
    for (let i =1; i <= k; i++){
        for (let j = 1 ; j <= i; j++){
            z+=2
        }
        if (i!==k){
            z+=','
        }
    }
    return z
}
console.log(deretSatu(5));