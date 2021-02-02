//high order function
let employess = ["Raiz", "alif", "fahmi", "ahmad", "dafa","ale","amar","andi","rizki"];

//output : ["ziar", "fils"]
const passwordFor = value =>value.split("").reverse("").join("")+value.length;

//1. metode push manual, bisa gunakan loop untuk isi passwordList
let passwordList = [];
passwordList.push (passwordFor(employess[0]));
console.log(passwordList);

//2 .function method
let passwordEmps = employess.map(passwordFor);
console.log(passwordEmps);

//3 .function method
let passwordEmps = employess.map (x => passwordForRegular(x));
console.log(passwordEmps);