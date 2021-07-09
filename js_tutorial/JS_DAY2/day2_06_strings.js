//Time: 10 minutes

// an introduction to strings and string functions
let a = "this is a string";

// can be defined in another way as well
const idly = "Idly";
console.log(idly);

// concatenating strings is very easy
const sambar = "Sambar";

let sambarIdly = sambar + '-' +idly;
let idlySambar = idly + '-' + sambar;

console.log(sambarIdly);
console.log(idlySambar);

// here are some sample string operations
// go through the documentation to learn more
console.log("idlySambar.toLowerCase()\t" + idlySambar.toLowerCase());
console.log("idlySambar.charAt(5)\t\t" + idlySambar.charAt(5));
console.log("idlySambar.toUpperCase()\t" + idlySambar.indexOf("a"));
console.log("idlySambar.toLowerCase()\t" + "abcd    ".trimRight() + "---");
console.log("idlySambar.toLowerCase()\t" + idlySambar.repeat(2));
console.log("idlySambar.slice()\t\t" + idlySambar.slice(2,4));
console.log("idlySambar.replace()\t\t" + idlySambar.replace("Sambar","dosa"));

console.log("\n");

// template literals are used for formatting a string

const dosa = "Dosa";
let monday = "Mysore Masala"
let tuesday = "Ghee Roast"
let wednesday = "Capsicum"

function printSpecialDosa(variety, dish) {
    console.log(`Today's special is ${variety} ${dish}`);
}

printSpecialDosa(monday, dosa);     // Mysore Masala Dosa
printSpecialDosa(tuesday, dosa);    // Ghee Roast Dosa
printSpecialDosa(wednesday, dosa);  // Capsicum Dosa
printSpecialDosa(wednesday, idly);  // Capsicum Idly

// template literals accept expressions
const dosa_price = 80;
const extra_sambar = 20;

console.log(`Price of your ${monday} ${dosa} with extra ${sambar} is ${dosa_price + extra_sambar}`);

var d = new String('dosa');
console.log(d.length);
// however, they can be counterintuitive
// so avoid using the string object
console.log(d);
console.log("\n");

var i = 'idli';
console.log(i);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting