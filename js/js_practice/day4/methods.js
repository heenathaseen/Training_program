let fruit = {
    name: "apple",
    color: "red",
    price: 100,
    describe: function () {
        console.log(`iam a ${this.name} `);
        console.log(`price is ${this.price}`)
    }
}
fruit.describe();

var myObj = {
    count: 10,
    myFunc: function () {
        console.log(this.count);
        setTimeout(() => {
            console.log(this.count);
            this.count++;
            console.log(this.count);
        }, 2000)
    }
}
myObj.myFunc();

var obj3 = {
    x: 3,
    y: 5,
    getMulFn: function (num) {
        console.log("creating the function of multiplying by " + this.x);
        return (m) => {
            return m * this.x
        }
    },
    printTable:function(){
        for(let i= 1;i<this.y;i++){
            console.log(`${this.x} x ${i} = ${this.x*i}`)
        }

    }
}
obj3.printTable();
obj3.x=10;
obj3.y=10;
obj3.printTable();

let a=obj3.getMulFn(10);
console.log(a(3));



