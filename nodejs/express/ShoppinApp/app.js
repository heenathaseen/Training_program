let productsapi={};
async function getWordsFetch() {
  const apiUrl = 'http://localhost:7000/shopping';
  // try {
      //throw new Error();      

      const response = await fetch(apiUrl);
      productsapi = await response.json();
       let checkedValue = document.querySelectorAll('.items:checked').value;

      //  let itemscls=document.getElementsByClassName(items);
       productsapi.forEach(element => {
        // document.getElementById("i").innerHTML
       document.getElementById("i").innerHTML= ('<input type="checkbox"  value="');
      });
      
      // document.getElementById("myBtn").addEventListener("click", function() {
        

      //     if(checkedValue==productlist){ console.log(`${checkedValue} and ${productlist}`)}
       
      // });
      

//   } catch (error) {
//      console.log("error")
//   }

 }
getWordsFetch();