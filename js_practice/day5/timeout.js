console.log("Before")
setTimeout(()=>{
    console.log("the wait is over")

},2000);

console.log("after")

function waitingFunc(){
    let x=0;
    setTimeout(function(){
        console.log(x++);
    },2000);
}
waitingFunc();
