function CheckboxValues() {
  console.log("get check box");
  //const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  const checkboxes = document.querySelectorAll('.items:checked');
  //const coupon = document.querySelector('.coupon');
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
}


async function fetchUrl(){
  //let response;
  let values=CheckboxValues();
  console.log("fetch url started.....");
  var serverUrl='http://localhost:7000/checkout'
  try {
      let response = await fetch(serverUrl, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
           id: values,
          })
        })
        console.log(response)
        return response
      
      }
   catch (error) {
       console.log(error);
      }
  }

//  fetchUrl();

  const btn = document.querySelector('#order');

  btn.addEventListener('click', () => {
    let h=fetchUrl()
    h.then((result)=>{
      console.log(result);
    }).catch((err)=>{
      console.log(err)
    })
  });

