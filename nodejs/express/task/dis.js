const coupons = new Map();
coupons.set("flat500","Applicable if the user’s total purchase value is over Rs 5,000 or haspurchased at least 6 items")
coupons.set("get40","If the user purchases 2 items worth more than Rs 2000, applies 40% discount on those items")
coupons.set("get50","If the user purchases 3 or more items worth more than Rs 2000, applies 50% discount on the entire order")

 const items = new Map();
 items.set("i1001", { iname: "Meat", desc: "what type is entirely up to you. We would recommend skinless white meat such as turkey or chicken as these are considered the healthiest because of the low amount of saturated fat. If you fancy something redder, then try to choose lean cuts.", price: 2500 })
 items.set("i1002", { iname: "Breakfast cereal", desc: "this will help give you a decent start to the day. Try to avoid the more sugary varieties, and opt for ones high in fiber, as this will keep you full for longer. Consider things like unsweetened granola or porridge oats/oatmeal.", price: 3000 })
 items.set("i1003", { iname: "Cooking oil ", desc: "you’re going to need this to cook most things. For healthier options, opt for olive oil,l rapeseed oil, or other oils choc full of omega 3.", price: 1100 })
 items.set("i1004", { iname: "Butter", desc: "if you’re making sandwiches, you’re going to need something to spread on your slices. You’ll also need this if you fancy making a cake.", price: 900 })
 items.set("i1005", { iname: "Eggs", desc: "these versatile little things are essential ingredients for a cake or can be made many different ways for a quick breakfast or lunch.", price: 1100 })
 items.set("i1006", { iname: "Cheese", desc: "a great standard sandwich filler or for an ingredient in cheesy side-dishes or main courses", price: 1400 })
 items.set("i1007", { iname: "Onions", desc: " it’s difficult to imagine a homemade dish that doesn’t utilize these. These keep well in cool dark places and are always good to have a few extra just in case you find yourself doing some extra cooking or having to make bigger portions", price: 1700 })
 items.set("i1008", { iname: "Garlic", desc: " another essential ingredient in many meals to add flavor", price: 1150 })
 items.set("i1009", { iname: "Fruit", desc: "these contain a host of vitamins and fiber that will help you be healthy and maintain an effective immune system. They also serve as great healthy snacks.", price: 1950 })
 items.set("i1010:", { iname: "Vegetables", desc: "a great source of vitamins. It’s best to mix as many different colors as possible, as each color of vegetable usually contains different essential vitamins. So, make sure your greens are not all green!", price: 1490 })
 items.set("i1011", { iname: "Pulses", desc: "if you’re vegan, vegetarian, or even flexitarian, you’ll be wanting to fill up on these to get that essential protein into your system in lieu of meat and fish", price: 1300 })
 items.set("i1012", { iname: "Soup", desc: " a great quick emergency lunch. Tinned soup tends to contain more nutrients than their instant counterparts. However, they do take up a lot more storage and are a little pricier.", price: 1830 })

    
    
// Java Script Program to find the Discount Percentage
// Function to find the Discount Percentage
function discountPercentage(item)
{
    var obj = {}
    let temp = new Map();
    for(let i of item){
        for(let j of items.keys()){
            temp.set(i,items.get(i).price)

        }
    }
    let totalPrice;
    let c = 0;
    for(let i of temp.values()){
        c = c+i;
    }
    console.log(c)
    totalPrice = c;
    if( item.length >= 6 || totalPrice >= 5000){
        console.log("flat500 coupon is valid");
        obj.valid=true
        obj.coupon="flat500"
        obj.totalAmount = totalPrice
        obj.finalAmount = totalPrice - 500
    }
    else{
        console.log("flat500 is not valid");
        obj.valid=false
    }
    let price1 = false
    for(let i of item){
        if(items.get(i).price>=2000)
        price1 = true

    }
    if(item.length == 2 || price1){
        console.log("get40 is valid");
        obj.valid = true
        obj.coupon = "get40"
        obj.totalAmount = totalPrice
        obj.finalAmount = totalPrice - (totalPrice/100)*40 
    }
    else{
        console.log("get40 is not valid");
        obj.valid = false
    }


    if(item.length == 3 ||  price1){
        console.log("get50 is valid");
        obj.valid = true
        obj.coupon = "get50"
        obj.totalAmount = totalPrice
        obj.finalAmount = totalPrice - (totalPrice/100)*50 
    }
    else{
        console.log("get50 is not valid");
        obj.valid = false
    }


    return obj
}
console.log(discountPercentage(["i1001"]));
