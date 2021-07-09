let newObject = new Object();
console.log(newObject);
newObject.firstName = "Heena";
newObject.lastName = "Thaseen";
console.log(newObject);

newObject["place"] = "Arcot";
newObject["mobNumber"] = 9876543210;
console.log(newObject);

console.log(newObject.firstName);
console.log(newObject["lastName"]);

for (let [key, value] of Object.entries(newObject)) {
    console.log(`${key}: ${value}`);
}


