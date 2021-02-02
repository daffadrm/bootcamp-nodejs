let employess = ["Asus laptop 5432", "Ak -47", "Solo Lavelling Webtoon", "Space bar Keyboar Organizer & USB Hub Pop",];

//old ways
function filterProduct (emps,prefix){
    let result = [];
    for (let i = 0; i < emps.length; i++){
        if(emps[i].startsWith(prefix)){
            result.push(emps[i]);
        }
    }
    return result;

} 
console.log(filterProduct(employess, "A"));
console.log(filterProduct(employess, "S"));