//Time: 8 minutes

// const is simple to understand
// a const cannot be changed
const someConstant = "I AM A CONSTANT!";
console.log(someConstant);
console.log("\n");

//someConstant = "NEW VALUE";
//console.log(someConstant);
//console.log("\n");

// however, you can try this
// but the new value is valid only within the scope 
// of the function
function testConstScope() {
    const someConstant = 'NEW VALUE';
    console.log(someConstant);
}
testConstScope();
console.log(someConstant);
console.log("\n");

// let will allow you to define a value once
// but its value can be changed as many times as you want
let iKeepChanging = "some value";
console.log(iKeepChanging);
iKeepChanging = "now I have a new value";
console.log(iKeepChanging);
iKeepChanging = "I changed my value again!";
console.log(iKeepChanging);
console.log("\n");

 // but you cannot do this
//let iKeepChanging = "some new value";

// every block is a scope
var test = "outside the block";
console.log(test);
{
    var test = "inside the block";
    console.log(test);
}
console.log("\n");

// therefore, it doesnt matter what kind of block it is
// it will behave the same way
var test2 = "outside the second block";
console.log(test2);
for (let i = 0; i < 3; i++)
{
    var test2 = "inside the second block";
    console.log(test2);
}
console.log("\n");

// difference between var and let?
function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  
    {
      let baz = "Bazz";
      var buzz = "buzzzz";
      console.log(baz); // Bazz
    }
  
    console.log(buzz);
    //console.log(baz); // ReferenceError
  }
  
  run();
  //console.log(buzz); // ReferenceError

  //https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var