/*
ARRAYS EXERCISE
*/
/***********************************************/
//FILL 
//3 ways to use fill

var array = [1, 2, 3, 4];

// fill with 5 from position 1
fill=2;

for(var i=fill;i<array.length;i++)
{
    array[i]=1;
}
console.log(array);


const fill = function(size,value){
	let arr = [];

	for(var i=0;i<size;i++){
		arr[i]=value;
	}
	return arr;
}

const arr_size = 5;
const value = 'abc';
console.log(fill(arr_size,value));


/***********************************************/

//REVERSE AN ARRAY

function Reverse(arr) {
    var i = 0;
    while (i < arr.length - 1) {
      arr.splice(i, 0, arr.pop());
      i++;
    }
    return arr;
  }
  
  var arr = [1, 2, 3,4];
  console.log(Reverse(arr));




/***********************************************/

//Compact: Clears array from all unnecessary elements, like false, undefined, empty strings, zero, null


function compact(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;

}
const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data));



/***********************************************/
//return an array without listed values


var object = { 0: '23', 1: 'geeksforgeeks', 2: 'true' };
       console.log(Object.values(object));
       console.log(Object.entries(object));





/*************************************************** */
//Uniqueee


var unique = function(arr){
	
	let temp = [];
    arr.forEach(function(item){
	   if(!temp.includes(item)){
		   temp.push(item);
	   }
    });
	return temp;;
}

data=[1,2,1,3,1,4,2,6];
console.log(unique(data));


/*************************************************** */

//Without




var without = function(arr,...args){
	
	let temp = [];
    arr.forEach(function(item,index){
	   if(!args.includes(item)){
		   temp.push(item);
	   }
    });
	return temp;;
}

data=[1,2,1,3,1,4,2,6];
console.log(without(data,1,2));








/*************************************************** */

//Comparing
function isEqual(a,b)
{
 
  
  if(a.length!=b.length)
   return "False";
  else
  {
  
   for(var i=0;i<a.length;i++)
   if(a[i]!=b[i])
    return "False";
    return "True";
  }
}
var a = [1, 2, 3, 5];
var b = [1, 2, 3, 5];
console.log(isEqual(a,b));


/****************************************** */
//CHUNK

function chunkArray(a,size){
    var index = 0;
    var arrayLength = a.length;
    var temp = [];
    
    for (var i=0; i < arrayLength; i+= size) {
        Chunk = a.slice(i, i+size);
         temp.push(Chunk);
    }

    return temp;
}

var result = chunkArray([1,2,3,4,5,6,7,8], 2);

console.log(result);

/***************************************** */
//Flatten
let arr = [[1, 2],[3, 4],[5, 6, 7, 8, 9],[10, 11, 12]];

let flattened = [].concat(...arr);

console.log(flattened);



/***************************************** */

//INTERSECTION


function Intersection(arr1, arr2) {


    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let Result = [];

    for (let i of setB) {
    
        if (setA.has(i)) {
            Result.push(i);
        }
        
    }
    
    return Result;

}
var a = [1, 2, 3, 5, 9];
var b = [1, 3, 5, 8];
console.log(Intersection(a,b));

/********************************* */



