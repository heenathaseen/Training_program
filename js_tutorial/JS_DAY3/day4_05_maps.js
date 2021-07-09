
// what is a Map?
// Let us return to our restaurant menu
// how do we solve the problem of understanding "Special of the day"?
let day = 'Monday';
let special = "";

switch (day) {
    case 'Monday':
        special = 'Mysore Masala';
        break;
    case 'Tuesday':
        special = 'Chettinad';
        break;
    case 'Wednesday':
        special = 'Guntur Chilli';
        break;
    case 'Thursday':
        special = 'Paneer Masala';
        break;
    case 'Friday':
        special = 'Capsicum Masala';
        break;
    case 'Saturday':
        special = 'Kanchipuram Special';
        break;
    case 'Sunday':
        special = 'Royal Masala';
        break;
}
console.log('The Special is\t' + special);

// we can use Arrays
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
specials = ['Mysore Masala'
, 'Chettinad'
, 'Guntur Chilli'
, 'Paneer Masala'
, 'Capsicum Masala'
, 'Kanchipuram Special'
, 'Royal Masala'];

day = 'Thursday'
console.log(`${day}'s special is ${specials[days.indexOf(day)]}`);

// let's look at a new way using map
var specialsMap = new Map();
specialsMap.set('Monday', 'Mysore Masala');
specialsMap.set('Tuesday', 'Chettinad');
specialsMap.set('Wednesday', 'Guntur Chilli');
specialsMap.set('Thursday', 'Paneer Masala');
specialsMap.set('Friday', 'Capsicum Masala');
specialsMap.set('Saturday', 'Kanchipuram Special');
specialsMap.set('Sunday', 'Royal Masala');
day = 'Sunday'
console.log(`${day}'s special is ${specialsMap.get(day)}`);

// adding a duplicate to a map
specialsMap.set('Sunday', 'Special Masala');
console.log(`${day}'s special is ${specialsMap.get(day)}`);
// note that there's only one value for a key
console.log(specialsMap);
console.log(`Map size:${specialsMap.size}`);


//some inbuilt map methods
console.log('\nEntries are:');
console.log(specialsMap.entries());

console.log('\nKeys are:');
console.log(specialsMap.keys());

console.log('\nValues are:');
console.log(specialsMap.values());
console.log('\n');

console.log(specialsMap.has('Friday'));
console.log(specialsMap.has('Goodday'));
console.log('\n');

//delete key and corresponding mapped value
specialsMap.delete('Friday');
console.log(specialsMap);
console.log(`Map size:${specialsMap.size}`);
console.log('\n');

//delete all the map entries. i.e, map becomes empty
specialsMap.clear();
console.log(specialsMap);
console.log(`Map size:${specialsMap.size}`);