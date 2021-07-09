let array=[2,8,6,4];
function average(){
    var average=0;
    var tot=0;

    for(let i=0;i<array.length;i++){
        tot += array[i];
    }
    average =tot/array.length;

    console.log(average);

}

function sum(){
    var sum=0;

    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    console.log(sum);

}

function min(){
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) {
            array[0] = array[i];
        }
    }
    console.log("min: " +array[0])
}
function max(){
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[0]) {
            array[0] = array[i];
        }
    }
    console.log("min: " +array[0])

}

average();
sum();
min();
max();


let check=new Map();

check.set("sum",sum());
check.set("max",max());
check.set("min",min());
check.set("average",average());

//Create a map where the name of the operation is the key and the function is the value​

let checkop=new Map();
check.set("sum",sum());
check.set("min",min());
check.set("max",max());


console.log(checkop);
console.log(checkop.entries());
console.log(checkop.keys());

 console.log(checkop.values());




