let array = [2, 8, 6, 4];

function sum(array) {
    var sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
    // console.log(sum);

}

function min(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) {
            array[0] = array[i];
        }
    }
    return array[0];
    //console.log("min: " +array[0])
}
function max(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[0]) {
            array[0] = array[i];
        }
    }
    return array[0];

    // console.log("min: " +array[0])



}
function average(arrAvg) {
    var average = 0;
    var tot = 0;

    for (let i = 0; i < arrAvg.length; i++) {
        tot += arrAvg[i];
        average = tot / arrAvg.length;

    }
    return average;
    // console.log(average);

}
let arrAvg = [2, 8, 6, 4];

//first 

let avg = average(arrAvg);
console.log("average: " + avg);

let add = sum(array);
console.log("sum: " + add);

let minimum = min(array);
console.log("minimum: " + minimum)

let maximum = max(array);
console.log("minimum: " + maximum)

//2.with map
let checkop = new Map();
checkop.set("average", average(arrAvg));
checkop.set("sum", sum(array));
checkop.set("min", min(array));
checkop.set("max", max(array));

 console.log(checkop);
// console.log(checkop.entries());
// console.log(checkop.keys());
// console.log(checkop.values());

console.log("sum of the array: " +checkop.get("sum"));
console.log("min of the array: " +checkop.get("min"));
console.log("max of the array: " +checkop.get("max"));
console.log("average of the array: " +checkop.get("average"));

//third
console.log(checkop.has("sum"));
console.log(checkop.has("min"));
console.log(checkop.has("maxx"));
console.log(checkop.has("div"));

//bonus 1
var n = 10;
function random(){
for(var i=0; i<n; i++){
   arr[i] =Math.floor((Math.random() * 100) + 1);
}
//console.log(arr);
return arr;
}
var arr = [];
let randomnumber=random();
console.log(randomnumber);


//bonus 2
function average(arr) {
    var average = 0;
    var tot = 0;

    for (let i = 0; i < arr.length; i++) {
        tot += arr[i];
        average = tot / arr.length;

    }
    return average;
    // console.log(average);

}

function sum(arr) {
    var sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
    // console.log(sum);

}

function min(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr[0] = arr[i];
        }
    }
    return arr[0];
    //console.log("min: " +array[0])
}
function max(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            arr[0] = arr[i];
        }
    }
    return arr[0];

    // console.log("min: " +array[0])



}


let checkbonus = new Map();
checkbonus.set("addition", sum(arr));
checkbonus.set("mininimum", min(arr));
checkbonus.set("maximum", max(arr));
checkbonus.set("avg", average(arr));

console.log(checkbonus);

//slide 3
// Create an array of size 10. Use Math.random() to populate the array with a random number between 1-100
let sizeOfArray = 10;
var inputNumbers = [];

function generateRandom() {
    for (var i = 0; i < sizeOfArray; i++) {
        inputNumbers[i] = Math.floor((Math.random() * 100) + 1);
    }
    return inputNumbers;
}
console.log(generateRandom());
//Create an array of size 10.  Write a function to print the average of the numbers in the array​
function toFindAverage(inputNumbers) {
    let average = 0;
    let tot = 0;

    for (let i = 0; i < inputNumbers.length; i++) {
        tot += inputNumbers[i];
        average = tot / inputNumbers.length;

    }
    return average;
}
console.log("the average of random numbers:" +toFindAverage(inputNumbers) );

// Create an array of size 10. Populate it with some strings. Write a function to that accepts an array and a single string. The function should return the array after performing two operations:​
// 1.The new string should be inserted in the last place​
// 2.The first string in the array should be removed
let ip=[2,3,4,2,3,2,4,3,5,6];
let str="iam_added"
function arrayWithString(){
    ip.push(str);
        ip.splice(0,1);
        console.log(ip);
  }
arrayWithString();
//another way
var stringArr = ['apple','banana','grapes', 'guava', 'coconut', 'pineapple', 'mango', 'litchi', 'plum' ,'peach'];
var singleString = 'dragonfruit'

function editFruits(arr, str){
    arr.push(str);
    arr.splice(0,1)
    return arr;
}

console.log(editFruits(stringArr, singleString));

//Write a program that takes 10 numbers (use the array from exercise 1 in this slide). Print the largest value in the array for a given range of index. ​
//For example if the array is [10, 20, 22, 34, 65, 35, 90, 34] and index range is 3-5, it should print the largest number of [24, 65, 35] which is 65​//
var arr = [12, 15, 78, 46, 45, 9, 10, 15, 65, 77];
var rangeLow = 2;
var rangeHigh = 8;
if(arr.length == 0 && rangeLow>0) {
    console.log("Error: Lower bound is invalid!")
}
else if(rangeHigh>arr.length) {
    console.log("Error: Higher bound is invalid")
}
else {
    for(var i=rangeLow; i<=rangeHigh; i++) {
        console.log(arr[i]);
    }
}

    

//slide 4
//1
var twoDArray = [['apple', 'mango'],['potato', 'cabbage']];
for(var i=0; i<twoDArray.length; i++){
    for(var j=0; j<twoDArray[i].length; j++) {
        console.log(twoDArray[i][j]);
    }
}
//2
var twoDArray1 = [[3, 5],[9, 2]];
var twoDArray2 = [[6, 9],[3,9]];
var sum2D = [[0,0],[0,0]];
for(var i=0; i<twoDArray1.length; i++){
    for(var j=0; j<twoDArray1[i].length; j++) {
        sum2D[i][j] = twoDArray1[i][j] + twoDArray2[i][j];
    }
}
console.log(sum2D);

//3
var twoDArray1 = [[3, 5],[9, 2]];
var twoDArray2 = [[6, 9],[3,9]];
for(var i=0; i<twoDArray1.length; i++){
  var sum = 0;
    for(var j=0; j<twoDArray1[i].length; j++) {
        sum+= twoDArray1[j][i];
    }
    console.log(sum);
}
for(var i=0; i<twoDArray2.length; i++){
  var sum2 = 0
     for(var j=0; j<twoDArray2[i].length; j++) {
        sum2+= twoDArray2[j][i];
    }
    console.log(sum2);
}
//slide 6
//Create the map in day4_05_maps.js dynamically using the two arrays defined in the file
var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var specialsMap = new Map();
specialsMap.set('Monday', 'Mysore Masala');
specialsMap.set('Tuesday', 'Chettinad');
specialsMap.set('Wednesday', 'Guntur Chilli');
specialsMap.set('Thursday', 'Paneer Masala');
specialsMap.set('Friday', 'Capsicum Masala');
specialsMap.set('Saturday', 'Kanchipuram Special');
specialsMap.set('Sunday', 'Royal Masala'); 

// Use the same menu example above and update the menu for Thursday
day = 'Thursday' 
specialsMap.set('Thursday', 'Special Masala');
console.log(`${day}'s special is ${specialsMap.get(day)}`);  
console.log(specialsMap); 
console.log('\n')
// Use the same menu example above and remove the menu item for Sunday
specialsMap.delete('Sunday');
console.log(specialsMap);
console.log(`Map size:${specialsMap.size}`);
console.log('\n'); 
// Get all the key-value pairs from the map and print them
console.log('\nKeys are:');
console.log(specialsMap.keys());

console.log('\nValues are:');
console.log(specialsMap.values());

//slide 1
function insertElementInArray() {

    let array = [1, 2, 3, 4, 5];

    let index = 3;
  

    let element = 8;
    array.splice(index, 0, element);

    console.log(array);

    if(array.length == 4){

        console.log("Equal")

    } else{

        console.log("Not equal")

    }

    console.log(array.splice(0,3))

    var x = array.slice(1, 3);

    console.log(x);

}
insertElementInArray();


