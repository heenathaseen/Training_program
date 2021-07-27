const someObject = { someProp: 123 };

let otherObject = Object.create(someObject);
otherObject.otherProp = 456;
console.log(otherObject.otherProp);

for (let key in otherObject) {
  console.log(key);
  console.log(otherObject[key]);
}

// output otherProp someProp

const primes = [2, 3, 5, 7];

for (let prime of primes) {
  //console.log(prime);
}

// output

