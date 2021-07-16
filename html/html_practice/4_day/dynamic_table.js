const content = [{
    name: "Hibiscus",
    desc: "We have both native and hybrid varieties in all colours.Our Red double petalled variety is a best seller",
    floweringSeason: "Year Around ",
    containerSize: "12 pot"
},
{
    name: "Rose",
    desc: "We have native and hybrid varieties in all colours. Paneer rose is best suited to Chennai climate. ",
    floweringSeason: "Year Around ",
    containerSize: "12 pot"
}, {
    name: "Jasmine",
    desc: "We have both native and hybrid varieties in all colours. ",
    floweringSeason: "Summer ",
    containerSize: "12 pot"
}, {
    name: "Vinca",
    desc: "vailable in white and pink dwarf varieties. ",
    floweringSeason: "Year Around ",
    containerSize: "8 pot"
}, {
    name: "ixora",
    desc: "We have full-sized and dwarf varieties in all colours.  ",
    floweringSeason: "Year Around ",
    containerSize: "14 pot"
}, {
    name: "Dianthus ",
    desc: "his is a small plant with pretty flowers. Perfect for a balcony  ",
    floweringSeason: "Summer",
    containerSize: "8 pot"
}, {
    name: "Balsam  ",
    desc: "Available in pink, red and violet.  ",
    floweringSeason: "Moonsoon Winter",
    containerSize: "8 pot"
}

]


function fn(){
    let table = document.createElement('table');
    let heading=table.createTHead();
    let tr=document.createElement('tr');
    let th1=document.createElement('th')
    let th2=document.createElement('th')
    let th3=document.createElement('th')
    let th4=document.createElement('th')
    let hCell1=document.createTextNode('Name')
    let hCell2=document.createTextNode('Description')
    let hCell3=document.createTextNode('Flowering Season')
    let hCell4=document.createTextNode('Container Size')

    th1.appendChild(hCell1);
    th2.appendChild(hCell2);
    th3.appendChild(hCell3);
    th4.appendChild(hCell4);

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);

    heading.appendChild(tr);

    for(let i of content){
        let tr1=document.createElement('tr');
        let td1=document.createElement('td')
        let td2=document.createElement('td')
        let td3=document.createElement('td')
        let td4=document.createElement('td')
        let dCell1=document.createTextNode(i.name)
        let dCell2=document.createTextNode(i.desc)
        let dCell3=document.createTextNode(i.floweringSeason)
        let dCell4=document.createTextNode(i.containerSize)

        td1.appendChild(dCell1);
        td2.appendChild(dCell2);
        td3.appendChild(dCell3);
        td4.appendChild(dCell4);

        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);

        table.appendChild(tr1);


    }
    

    document.body.appendChild(table);
 

    
}


