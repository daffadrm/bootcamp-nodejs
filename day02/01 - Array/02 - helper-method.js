//slice potong mulai dari parameter index pertama s/d inder pertama to len
var list = ["a", "b", "c", "d"];
//console.log(list.slice(1,2));
//var b = list.slice(1,3);
//console.log(b);

//splice
var c = list.splice(2,1,"e","f");
//console.log(list.splice(1,2));

//copy array, memiliki reference yg sama
var list1 = list;
console.log(list1);

//jika list1 dirumah, maka variable sourcenya ikut berubah (non imutable)
list1.splice(2,1,"z");
console.log(list);

//alternatid copy array
var list2 = Array.from(list);

//concat array
var listx = [1,2,3];
var listy = [4,5,6];
var listz = listx.concat(listy);
console.log(listz);