
// objects are mutable
let flower1 = {
    'type': 'rose',
    'colour': 'red',
    'description': 'fragrant, thorny'
}
console.log('Flower 1 is')
console.log(flower1);
console.log('\n');

// we can change the value of any of the properties
flower1['colour'] = 'pink';
console.log('Flower 1 is')
console.log(flower1);
console.log('\n');

// when we pass an object, we get a reference to the object
let flower2 = flower1;
console.log('Flower 2 is')
console.log(flower2);
console.log('\n');

flower2['colour'] = 'yellow';
console.log('Flower 2 is')
console.log(flower2);
console.log('Flower 1 is')
console.log(flower1);
console.log('\n');

// the same concept extends to functions
let item = {
    'name': 'soap',
    'price': 30,
    'discount': 20
}

function applyDiscount(item) {
    item.finalPrice = item.price * (100-item.discount)/100
}

applyDiscount(item);
console.log(item);

function apply20pctDiscount(price, finalPrice) {
    finalPrice = price * 0.8;
    console.log(`After applying 20% discount your price would be ${finalPrice}`);
    return finalPrice;
}

let price = 100, finalPrice = 0  
apply20pctDiscount(price, finalPrice);   // return value from function is not assigned   
console.log(`After applying 20% discount we get ${finalPrice}`);   //value is still zero
console.log('\n');

finalPrice = apply20pctDiscount(price);
console.log(`After applying 20% discount we get ${finalPrice}`);
console.log('\n');

// this impacts object equality
let abc = 'some string';
let def = 'some string';

if(abc == def) {
    console.log('abc == def');
}
if(abc === def) {
    console.log('abc === def');
}
console.log('\n');

let obj1 = {
    'name': 'abc',
    'value': 'def'
}
let obj2 = {
    'name': 'abc',
    'value': 'def'
}
if(obj1 == obj2) {
    console.log('obj1 == obj2');
}
else {
    console.log('obj1 == obj2 failed');
}

if(obj1 === obj2) {
    console.log('obj1 === obj2');
}
else {
    console.log('obj1 === obj2 failed');
}

obj2 = obj1
if(obj1 == obj2) {
    console.log('obj1 == obj2');
}
else {
    console.log('obj1 == obj2 failed');
}

if(obj1 === obj2) {
    console.log('obj1 === obj2');
}
else {
    console.log('obj1 === obj2 failed');
}
console.log('\n');

// const and bindings
const someStr = 'hello!'
//someStr = 'goodbye!'

const someObj = {
    'a': 'hello',
    'b': 'lorem ipsum'
}

console.log(someObj);
someObj.b = 'goodbye'
console.log(someObj);