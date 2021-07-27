const isPrimeNumber = (num) => {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };
let getPrimenumber = function* (until = Infinity){
    for(let i=100; i < until; i++){
        if(isPrimeNumber(i)) yield i;
    }
}
console.log([...getPrimenumber(200)])