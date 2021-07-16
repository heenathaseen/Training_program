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

function tableCreate() {
    var table = document.createElement('table');
    var heading = table.createTHead();
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');
    var col1 = document.createTextNode("Name");
    var col2 = document.createTextNode("Description")
    var col3 = document.createTextNode("Flowering Season")
    var col4 = document.createTextNode("Container size")

    th1.appendChild(col1)
    th2.appendChild(col2)
    th3.appendChild(col3)
    th4.appendChild(col4)
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    heading.appendChild(tr);


    for (let i of content) {
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        var text1 = document.createTextNode(i.name);
        var text2 = document.createTextNode(i.desc);
        var text3 = document.createTextNode(i.floweringSeason);
        var text4 = document.createTextNode(i.containerSize);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table.appendChild(tr);
    }

    heading.classList.add("heading");
    table.classList.add("tbl");
    document.body.appendChild(table);
    document.getElementById("myBtn").remove();

}

function formCreate() {
    var form = document.createElement("form");
    var name = document.createElement("input");
    var namelabel = document.createElement("label");
    name.setAttribute("id ", "name");
    name.setAttribute("type", "text");
    namelabel.setAttribute("for", "name");
    form.appendChild(namelabel);
    form.appendChild(name);

    var name2 = document.createElement("input");
    var namelabel2 = document.createElement("label");
    name2.setAttribute("id ", "name2");
    name2.setAttribute("type", "text");
    namelabel2.setAttribute("for", "name2");
    form.appendChild(namelabel2);
    form.appendChild(name2);
    document.body.appendChild(form);
}