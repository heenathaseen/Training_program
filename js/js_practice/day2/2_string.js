var name="heena thaseen";
console.log(name.length);
console.log(name.indexOf("e"));
console.log(name.charAt(4));
console.log(name.slice(2,7).toUpperCase())

//prime number
function prime(num, i)
     {
    
         if (num <= 2)
             return  false;
         if (num % i == 0)
             return false;
         if (i * i > num)
             return true;
         
         return prime(num, i+1);
     }
    
        let input = 5;
    
         if (prime(input, 2)){       
          console.log("Yes");
        }
         else{
         console.log("No");
         }