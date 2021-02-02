let employess = ["Raiz", "alif", "fahmi", "ahmad", "dafa","ale","amar","andi","rizki"];

//arrow function filter
//let filterEmp = (emps, prefix)=> emps.filter (emp => emp.startWith(prefix));
//console.log(filterEmployess("f"));

//old ways
function filterEmp (emps,prefix){
    let result = [];
    for (let i = 0; i < emps.length; i++){
        if(emps[i].startsWith(prefix)){
            result.push(emps[i]);
        }
    }
    return result;

} 
console.log(filterEmp(employess, "a"));