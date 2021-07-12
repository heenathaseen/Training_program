//symbol creates unique value
let symbolExample = Symbol();
symbolExample = Symbol("heena");
console.log(symbolExample);

let namesym=Symbol("heena");
console.log(namesym);

if(symbolExample === namesym){
    console.log("same");
}else{
    console.log("not same");

}

console.log(typeof(symbolExample))

if("heena" === "heena"){
    console.log("same");
}else{
    console.log("not same");

}

