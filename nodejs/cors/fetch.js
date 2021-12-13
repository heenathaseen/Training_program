fetch("http://localhost:3000/data")

.then((res)=>{

    return res.json();    

})

.then((data) => {      

    console.log(data);

    const container = document.getElementById("fetch");

    container.innerHTML = `${data.name} is in class ${data.class} `;

})