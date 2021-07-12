var weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

console.log(weekdays);
console.log(weekdays.length);
console.log(weekdays[1]);

let removedDay = weekdays.
splice(3,1);
console.log("removed day: " + removedDay);
console.log(weekdays)




for (let i = 0; i < weekdays.length; i++) {
    console.log(i + "\t" + weekdays[i])
}


for(let days of weekdays){
    console.log(days)
}

weekdays.forEach(function (days, index) {
    console.log(index + "  " + days)
})

weekdays.forEach((days, index) => {
    console.log(index + " - " + days)
})

var emptyArray = []

emptyArray.push(1);
emptyArray.push(2);
emptyArray.push(3);
emptyArray.push(4);
emptyArray.push(5);

console.log(emptyArray);
emptyArray.push("hello");
console.log(emptyArray);
emptyArray.pop();
console.log(emptyArray);


//another way of creating array
let newArray = new Array(5);
console.log(newArray);
newArray[3]="heena"
console.log(newArray);















