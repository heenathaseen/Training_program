let friendsMap = new Map();

friendsMap.set(1,"Asad");//key can be string
friendsMap.set(2,"Saif");
friendsMap.set(3,"Supraja");
friendsMap.set(4,"Soundharya");
friendsMap.set(5,"Archana");

console.log(friendsMap);
console.log(friendsMap.entries());
console.log(friendsMap.keys());
console.log(friendsMap.values());

console.log("My third frnd is " +friendsMap.get(3));

console.log(friendsMap.delete(3));
console.log(friendsMap.entries());







