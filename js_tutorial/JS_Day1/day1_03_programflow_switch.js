
// sometimes we might encounter a lot of conditions
// switch-case makes it easier to organize code
// we will learn more about break in the next section

console.log("This is a demo of a switch case");

var some_input = "carrot";

switch (some_input) {
    case "brinjal":
        console.log("This is a purple vegetable");
        break;
        
    case "capsicum":
        console.log("This vegetable can be green, yellow, red, or a lot of other colours");
        break;
    
    case "spinach":
        console.log("This is a green leafy vegetable");
        break;
    
    case "carrot":
        console.log("It can be orange or light red");
        break;
    
    case "radish":
        console.log("A white vegetable");
        break;
}

/////////////////////////////////////////////////
console.log("\nThis is a demo of a switch - default case");

var new_input = "potato";

switch (new_input) {
    case "brinjal":
        console.log("This is a purple vegetable");
        break;
    
    case "capsicum":
        console.log("This vegetable can be green, yellow, red, or a lot of other colours");
        break;
    
    case "spinach":
        console.log("This is a green leafy vegetable");
        break;
    
    case "carrot":
        console.log("It can be orange or light red");
        break;
    
    case "radish":
        console.log("A white vegetable");
        break;

    default:
        console.log("Sad! No such case found..");
}
