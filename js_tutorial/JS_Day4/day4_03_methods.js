// many of the in-built objects have in-built methods
// example
let pets = ['cat', 'dog', 'fish', 'parrot', 'white mouse'];
console.log(`fish is Pet# ${pets.indexOf('fish')+1}`);

// another example
console.log("abc".toUpperCase());
console.log("\n");

// we can attach functions to an object also
let myStringCheckLibrary = {
    isAllCaps: function(userInput) {
        return userInput.toUpperCase() == userInput;
    },
    isAllLower: function(userInput) {
        return userInput.toLowerCase() == userInput;
    },
    isLengthBetween: function(userInput, min, max) {
        return userInput.length >= min 
            && userInput.length <= max;
    }
}

console.log(myStringCheckLibrary.isAllCaps('ABCDEFG'));
console.log(myStringCheckLibrary.isAllLower('ABCdef'));
console.log(myStringCheckLibrary.isLengthBetween('ABC', 3, 8));
console.log("\n");

// functions can access other properties
// of the object via 'this' keyword
let myStringCheck2 = {
    isAllCaps: function(userInput) {
        return userInput.toUpperCase() == userInput;
    },
    isAllLower: function(userInput) {
        return userInput.toLowerCase() == userInput;
    },
    isLengthBetween: function(userInput, min, max) {
        return userInput.length >= min 
        && userInput.length <= max;
    },
    isMixedCase: function(userInput) {
        return !this.isAllCaps(userInput) 
        && !this.isAllLower(userInput);
    }
}
console.log(myStringCheck2.isMixedCase('ABCdef'));
console.log(myStringCheck2.isMixedCase('ABC'));
console.log(myStringCheck2.isMixedCase('def'));
console.log("\n");

// data and functions can work together
let bird = {
    name: 'sparrow',
    sound: 'chirp',
    food: 'everything',
    describe: function() {
        console.log(`I am a ${this.name}.`);
        console.log(`I ${this.sound}.`);
        console.log(`And I eat ${this.food}.`);
    }
};
bird.describe();
