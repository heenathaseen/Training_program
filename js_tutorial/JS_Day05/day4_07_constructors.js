console.log('\nyou can create an object using any function');
function someFn() {
    console.log('I am a function...');
}

// the function is a constructor
let x = new someFn();
// which returns an empty object
console.log(x);

console.log('\nyou can add properties using a constructor');
function someFn() {
    this.ping = 'pong';
    this.ting = 'tong';
    console.log('I am a function...');
}
let pingTing = new someFn()
console.log(pingTing)

console.log("\n You can add a function too");
// note the coding convention for this
function Animal() {
    console.log('I am an animal constructor function...');
    this.species = 'animal';
    this.colour = 'unknown';
    this.eat = function() {
        console.log("Om Nom");
    }
}

// the function is a constructor
let y = new Animal();
// which returns an object
console.log(y);
y.eat();