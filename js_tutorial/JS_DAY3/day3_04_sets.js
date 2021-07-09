
// alternative to Array is a Set
let mySet = new Set();
mySet.add("one");
mySet.add("two");
mySet.add("three");
mySet.add("four");
mySet.add("five");

// adding a duplicate value to a set
console.log(mySet);
mySet.add('five');
console.log(mySet);

// array adding a duplicate
// the basic syntax to create an array
let vegetables = ['Onion', 'Potato', 'Tomato'];
console.log(vegetables);
console.log(vegetables);
vegetables.push('Potato');
console.log(vegetables);


//time to understand and run is 5 mins
//added some practice code
//useful is comaprision
//good for this




mySet.add(5);
console.log(mySet.has(5));       
console.log(mySet.has(Math.sqrt(25)));

console.log(mySet.has('one')); 


console.log(mySet.size)
console.log(mySet.delete(5))   
console.log(mySet.has(5))



