// Understanding Object methods
let firstObj = new Object();
firstObj.strProp = 'I am a string' 
firstObj.numProp = 234
firstObj.arrProp = [23, 45, 66, 1]
console.log(firstObj)
console.log('\n')

let firstObjProps = Object.entries(firstObj)
console.log(firstObjProps)
console.log('\n')

secondObj = Object.fromEntries(firstObjProps)
console.log(secondObj)

console.log('firstObjPropNames are...' + Object.getOwnPropertyNames(firstObj))
