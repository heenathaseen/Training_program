// for(var i=100; i<=200; i++){
//     //i divided by 2345678910, the remainder cannot be equal to 0;
//     if(i%2!=0 && i%3!=0 && i%4!=0 && i%5!=0 && i%6!=0 && i%7!=0 && i%8!=0 && i%9!=0 && i%10!=0 && i%11!=0){
//         document.write(i+"</br>");
//     }
// }
let range = {
	from: 100,
	to: 200,

	[Symbol.iterator]() {
		// called once, in the beginning of for..of
		return {
			current: this.from,
			last: this.to,

			next() {
				// called every iteration, to get the next value
                if (this.current%this.last===0 && this.current!==this.last) {
                    notPrime = true;
                }
                
			},
		};
	},
};

// spread 
console.log(...range);