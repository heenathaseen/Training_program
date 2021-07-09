var num=10;
while(num<10){
    console.log("number" +num) 
    num++;
}


var num1 =0;
while(num <=10){
    console.log("number" +num1);
    num +=2;
}
var num2 =0;

while(++num2 <=10){
    console.log(num2);
}
var num3 =0;

while(num3++ <=10){
    console.log(num3);
}

var num4 =0;
var x=''

while(num4++ <=10){
    x= x+num4+"";
}
console.log(x);

var num6=0;
while(num6 <10){
    num6++;

    if(num6==7){

        continue;

    }
    console.log(num6);


}
var num7=0;
while(num7 <10){
    num6++;

    if(num7==7){

        break;

    }
    console.log(num7);


}