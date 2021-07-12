// first look at an object
let myObj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(myObj);

let entries = Object.entries(myObj);
console.log("entries:"+ entries);

let myMap = new Map(entries);
console.log(myMap);

// however, map can have any key
myMap.set(Symbol('d'), 4);
myMap.set({e: 'e'}, 5);
myMap.set(['f', 'g'], 7);
console.log(myMap);

// as map is an object
// you can attach a method to a map
myObj.print = function() {
    console.log(`the object value of a is ${this.a}`);
}
myObj.print();

myMap.print = function () {
    console.log(`the map value of a is ${this.get('a')}`);
}
myMap.print();

// order of elements is not the same as order of properties
// cannot be counted on
// keys of object include methods
console.log(Object.keys(myObj));
console.log(myMap.keys());
console.log(myMap.values());
