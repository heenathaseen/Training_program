// "this" provides a context
// to a function
function greet(greeting) {
    console.log(`${greeting}! I am ${this.nationality}.`);
}

let indianPerson = {
    'nationality': 'Indian',
    'greet': greet
}
indianPerson.greet('Namaste');

// this points to americanPerson in this example
let americanPerson = {
    'nationality': 'American',
    'greet': greet
}
americanPerson.greet('Hi');

// this points to mexicanPerson in this example
let mexicanPerson = {
    'nationality': 'Mexican',
    'greet': greet
}
mexicanPerson.greet('Hola');
console.log('\n');
console.log('==========');
console.log('\n');

// however, JavaScript functions are also objects
function cook(technique) {
    console.log(`I am ${technique} this ${this.name}`);
}

// therefore, you get undefined for name
// as the function itself does not have a 'name' property
cook('baking');

// context can be attached using 'call'
potato = {
    name: 'potato'
}
cook.call(potato, 'frying');

// and apply
rice = {
    name: 'rice'
}
cook.call(rice, 'boiling');
console.log('\n');
console.log('==========');
console.log('\n');

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
console.log('\n');
console.log('==========');
console.log('\n');