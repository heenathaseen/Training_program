// In this file we learn how to manipulate elements
// what are the different properties we can change

// First we try to get the element by ID
const outerRectangle = document.getElementById('outer-rectangle-1')

// once we do, we can change the text
outerRectangle.innerText = 'I can change the text with JavaScript!'

// can change the inner html also
outerRectangle.innerHTML = 'I can change the <b>html</b> with JavaScript!'
// note how the alignment changes
outerRectangle.innerHTML = '<p>I can change the <b>html</b> with JavaScript!</p>'

// we can also change the style of the element
outerRectangle.style.backgroundColor = '#333'

// we can add and remove classes to change the style
const circle1 = document.getElementById('circle-1')
circle1.classList.add('red-text')

// remove and apply a different class to completely change the look
circle1.classList.remove('circle')
circle1.classList.add('square')

// can directly modify the style as well
// note the attribute names are camel-case
circle1.style.color = 'green'
circle1.style.backgroundColor = 'pink'

// can access attributes and set them as well
console.log(circle1.title)
console.log(circle1.getAttribute('title'))
circle1.title = 'This is circle 1'

// we can remove elements from the DOM
circle1.remove()

// we can create a new element and add
let newPara = document.createElement("p")
newPara.innerHTML = "Some text created dynamically"
document.body.appendChild(newPara)

// a more elegant way of doing it
let newPara = document.createTextNode("I am a dynamic paragraph")
document.body.appendChild(newPara)

// we can add a new element of any sort with styles
let newSquare = document.createElement('div')
newSquare.classList.add('square')
document.body.appendChild(newSquare)

// you can effectively "move" an element from one part of the dom to another
let newSquare = document.getElementById('square-1')
//newSquare.remove()
document.body.appendChild(newSquare)
// and change its ID
newSquare.id = 'new-square'

