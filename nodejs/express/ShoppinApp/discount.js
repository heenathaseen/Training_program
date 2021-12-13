// total price 500 discount
const flat500=(totalPrice)=>{
    const newTotal=totalPrice-500
    return newTotal;
}

// Each price 40% discount
const get40=(prices)=>{
    let dis=prices.map(e=>e-(e*0.4))
    // console.log(dis);
   let total= dis.reduce((acc,curr)=>{
        return acc+curr
    },0)
    return total;
}

// total 50% discount
const get50=(totalPrice)=>{
    const newTotal=totalPrice-(totalPrice*0.5)
    return newTotal
}


// exports
module.exports={flat500,get40,get50}

