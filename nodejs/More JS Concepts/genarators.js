function* generateSeq() {
    yield 1;
    yield 2;
    return 3;
  }

  let gen = generateSeq();
  console.log("***"+gen);
  console.log("****"+JSON.stringify(gen.next()));
  console.log("****"+JSON.stringify(gen.next(1)));
  console.log("****"+JSON.stringify(gen.next(2)));

//This example generates a sequence of values from start to end:
//Generators are labelled with function*
function* generateSequence(start, end) {
	for (let i = start; i <= end; i++) {
		// use yield to generate a value,
		yield i;
	}
}

for (let value of generateSequence(1, 5)) {
	console.log(value); // 1, then 2, then 3, then 4, then 5
}

/* below is how we create an iterable object
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
      return <object with next to make range iterable>
    }
  }*/

  
 // A common practice for Symbol.iterator is to return a generator, it makes the code shorter, as you can see:
  
  let range = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  for(let value of range) {
    console.log(value); // 1, then 2, then 3, then 4, then 5
  }


  // In regular generators we can’t use await. All values must come synchronously, as required by the for..of construct.