// Write a program which takes two objects as the input o1, o2.
// For every property in o2 it should add the property and value in o1
// if the property name doesn’ t exist in o1.If the property name exists,
// the value in o1 should be updated to reflect the value in o2

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5, d: 5 };



const returnedTarget = Object.assign(target, source);



console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }



console.log(returnedTarget);

// Write a
// function that makes a“ deep copy” of(link) of an object.Hint: use the answers to 3, 4

let object1 = [{
    name: "deepak",
    age: 16
}, {
    name: "santhosh",
    age: 18
}]

let clone = object1;
object1.state = "cheenai";

console.log(object1);
console.log(clone)