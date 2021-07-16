// setTimeOut(myFunction,1000);

function myFunction(){
    document.getElementById("name").innerHTML = 'JavaScript DOM Practice';
    document.getElementById("text").style.color = "red";
    let x = document.getElementById("addChild");
    let y = document.createTextNode("DOM 2");
    x.appendChild(y);
    // document.getElementById("addChild").appendChild(x);
    document.getElementById("para").style.backgroundColor  = "pink";
    // z = document.createElement("addChild2");
    // z.setAttribute("id","newDivChild" );
    // console.log(z);

    let newSquare = document.getElementById('addChild')


    newSquare.id = 'new-div-id';

    
  }
myFunction();