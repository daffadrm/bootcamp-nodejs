//add new element in last index
let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];

fruits.push("Anggur", "Banana", "Sirsak");
console.log (fruits);

fruits.pop();
console.log (fruits);

fruits.splice(2,1,);
console.log(fruits);

fruits.splice (2,3,);
console.log(fruits);

fruits.splice (2,0,"Rambutan","Bangkuang",);
console.log(fruits);

fruits.splice (4,1,"Nangka",);
console.log(fruits);

var fruits2 = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
var sayur2 = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];
var listz = fruits2.concat(sayur2);
console.log(listz);

const reverse = listz.reverse();
console.log(reverse)

const listz2 = "Jeruk"
switch (listz) {
    case "tomat":
        break;

    default:
        break;
}
console.log(switch);