o1={
    name:"heena",
   
}
o2={
    name:"thaseen",
    age:"1"
}

const getDiffObj = (o1, o2) =>  Object.keys(o1)
    .filter(k => Object.keys(o2).includes(k))
    .concat(Object.keys(o2).filter(k => Object.keys(o1).includes(k)))
    .map(k => o1[k] && o2[k])

console.log(getDiffObj(o1, o2))
// console.log(getDiffObj(obj2, obj1))