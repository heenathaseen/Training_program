//Time: 5 minutes
// creating a function with an inner function
function outerFunction(str) {
    console.log('Outer Function has the string ' + str);

    let innerFunction = () => {
        console.log('Hello from the inner function');
        console.log('Outer string is ' + str);
    }
    
    innerFunction();
}

outerFunction('test');
console.log('\n');

// this can be modified to make an interesting usecase
function getMultiplicationFn(num) {
    console.log('Creating the function for multiplying by ' + num);

    return (x) => {
        return x * num;
    }
}

let timesFive = getMultiplicationFn(5);
console.log('3 x 5 = ' + timesFive(3));
console.log('\n');

// an example of how it might be used
for(let i = 1; i <= 5; i++) {
    let timesFn = getMultiplicationFn(i);
    for(let j = 1; j <= 5; j ++) {
        console.log(i + ' x ' + j + ' = ' + timesFn(j));
    }
}

//combine day2_00_blank.js with this file