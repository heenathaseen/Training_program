let fruit1 = {//"" on ryt is not necessary
    type: "Mango",
    color: "yellow",
    description: "love mangoes"
}
console.log(fruit1);
fruit1.color = "green";
//console.log(fruit1);

let fruit2 = fruit1;//replica
//console.log(fruit2);

fruit2["description"] = "still i love mangoes";
console.log(fruit2);
console.log(" --------------  ");
console.log(fruit1);

let item = {
    name: "Soap",
    price: 40,
    discount: 20,
}
function applyDiscount(item1) {
    item1.finalPrice = item1.price * (100 - item1.discount) / 100;

}
applyDiscount(item);
console.log(item);

let name = "heena";
let lastName = "heena";

if (name==lastName){
    console.log("name == lastname")
}else{
    console.log("failed ==name");
}
if (name===lastName){
    console.log("name === lastname")
}else{
    console.log("failed ==name");
}

let nameObject = {
    name : "heena",
    id : 123
}

let nameObject1 = {
    name : "heena",
    id : 123
}
if (nameObject==nameObject1){
    console.log("ob == ob1");
}else{
    console.log("failed ==");
}
if (nameObject===nameObject1){
    console.log("ob === ob1");
}else{
    console.log("failed ===");
}

nameObject=nameObject1;
if (nameObject==nameObject1){
    console.log("ob == ob1 pass");
}else{
    console.log("failed == f");
}
if (nameObject===nameObject1){
    console.log("ob === ob1 pass");
}else{
    console.log("failed === f");
}




