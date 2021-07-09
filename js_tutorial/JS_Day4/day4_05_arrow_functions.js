'use strict';

var obj = {
  a: 10,
  b: function() {
      console.log(`this.a in b() is ${this.a}`);
  },
  c: () => {
    console.log(`this.a in c() is ${this.a}`);
  }
};
obj.b();
obj.c();

var obj2 = {
    count : 10,
    doSomethingLater : function() { 
        // since the arrow function was created within the "obj",
        // it assumes the object's "this"
        setTimeout( () => { 
            this.count++;
            console.log(this.count);
        }, 3000);
    }
}
obj2.doSomethingLater();

// another example
var obj3 = {
    by: 3,
    till: 5,
    getMultiplicationFn: function (num) {
        console.log('Creating the function for multiplying by ' + this.by);
    
        return (x) => {
            return x * this.by;
        }
    },
    printTable: function() {
        for(let i = 1; i <= this.till; i++) {
            console.log(`${this.by} X ${i} = ${this.by * i}`);
        }
    }
}
obj3.printTable();

console.log('\n');

obj3.by = 5;
obj3.till = 10;
obj3.printTable();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions