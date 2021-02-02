// return index
let arr = [1,2,3,4,5];
console.log(arr.indexOf(3));

//convert arrat into string
let str = ["java", "js","phyton","golang"];
console.log(str.join(","));
console.log(typeof str);

//convert string to array
let com = "code.id";
console.log(com.split(""));

//regular function
function passwordForRegular(){

}

//arrow function; kasus kata code.d =>di.edoc
let passwordFor = value =>value.split("").reverse("").join("")+value.length;

console.log(passwordFor("code.id"));