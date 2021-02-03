//initial object
const x = {}

const product ={
    id:1,
    name : "Laptop Dell",
    price : 1500.00,
    variant: {
        type: "Gamer",
        core: "i7 Core"
    }
}

const infoProduct = info => {
    return  `Info product : ${info.name},${info.price}`

}
console.log(infoProduct(product));

//destructruring object
const{id,...info} = product;
console.log(id);
console.log(info);

const{variant:{type}}=product;
console.log(type);
console.log(info)