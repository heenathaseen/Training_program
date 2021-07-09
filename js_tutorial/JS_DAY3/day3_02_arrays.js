// the basic syntax to create an array
let vegetables = ['Onion', 'Potato', 'Tomato'];
console.log(vegetables);

// Basic property of an array is its length
console.log("How many vegetables?\t" + vegetables.length);

// we can access our values from the array using the index
// JavaScript arrays are zero-indexed
console.log("Vegetable at index 1 is\t" + vegetables[1]);

// there are multiple ways to loop over an array
// each of them has its own use

// the classic way
for(let i=0; i<vegetables.length; i++) {
    console.log(i + "\t" + vegetables[i]);
}
console.log("\n");

// shortcut
// note, the index is not accessible here

for(let veggie of vegetables) {
    console.log(veggie);
}
console.log("\n");

vegetables.forEach(function(veg, idx) {
    console.log(idx + "\t" + veg);
})
console.log("\n");

vegetables.forEach((veg, idx) => {
    console.log(idx + "\t" + veg);
});
console.log("\n");

// how to add an item to the end of an array
vegetables.push("Green Chilly");
console.log(vegetables);
console.log("\n");

// remove an item from the end of an array
let lastVegetable = vegetables.pop();
console.log(lastVegetable);
console.log(vegetables);
console.log("\n");

// find an item in an array
vegetables.push("Capsicum");
vegetables.push("Cabbage");
vegetables.push("Beetroot");

console.log(vegetables);
console.log(vegetables.indexOf("Cabbage"));

// how to remove items from a given position
let removedVeg = vegetables.splice(3, 2);
console.log(vegetables);
console.log(removedVeg);
console.log("\n");

vegetables.push("Brinjal");
vegetables.push("Beans");
console.log(vegetables);
console.log("\n");

// how to replace items with 
let removeAgain = vegetables.splice(2, 1, 'Cauliflower');
console.log(vegetables);
console.log("\n");

// finally, how to copy an array
let shallowCopy = vegetables.slice(2, 4);
console.log(shallowCopy);
console.log("\n");

// another way of creating an array
let newArray = new Array(5);
console.log(newArray);

newArray[2] = 'hello!';
console.log(newArray);



//time to understand and running is  20 mins
//basics is good 
//WE can add some more buit in functions
