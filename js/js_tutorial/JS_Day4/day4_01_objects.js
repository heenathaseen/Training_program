
// what is an object?
console.log('---1---');
let obj1 = new Object();
console.log(obj1);

// set an attribute
obj1.name = 'First Object';
console.log(obj1);

// values can be of any type
obj1.value = 200;
console.log(obj1);

obj1.value = 300;
console.log(obj1);

// another notation to access a property
obj1['value2'] = 500;
console.log(obj1);

// use a symbol for the property id
let sym = Symbol('value3')
obj1[sym] = 'Secret value';
console.log(obj1);
console.log(obj1[sym]);

// how to access the key-value pairs in an object
for (let [key, value] of Object.entries(obj1)) {
console.log(`${key}: ${value}`);
}