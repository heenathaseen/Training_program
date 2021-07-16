// we can get all elements by class name
let squares = document.getElementsByClassName('square')

// another option is to use Array.from(squares)

// we can also use query selector
// selecting by ID
const outerRectangle = document.querySelector("#outer-rectangle-1")

// by class
const square = document.querySelector(".square")
function testFn() {
    square.remove()
}
// we only get the first

// to get them all, we use 
const squares = document.querySelectorAll(".square")
function testFn() {
    square.remove()
}

// you can get the children of an element
const outerRectangle = document.getElementById('outer-rectangle-1')
function testFn() {
    const ltBlueRect = outerRectangle.children
    // and the children of the children
    for(let rect of ltBlueRect) {
        console.log(rect.id)
        let grandchildren = rect.children
        console.log(grandchildren)
    }
}

// get the count of children
console.log(outerRectangle.childElementCount)

// or use query selector at any level
const squares = outerRectangle.querySelectorAll('.square')
for(let square of squares) {
    console.log(square.id)
    square.classList.add('red-text')
}

// we can also get the parent
const rectangle = document.getElementById('inner-rect-3')
function testFn() {
    const outerRectangle = rectangle.parentElement
    outerRectangle.style.backgroundColor = 'yellow'
}

// getting the closest parent
const circle = document.getElementById('circle-4')
function testFn() {
    const outerRectangle = circle.closest(".outer-rectangle")
    outerRectangle.style.backgroundColor = 'yellow'
}

// get the siblings
const circle = document.getElementById('circle-4')
function testFn() {
    const circle2 = circle.nextElementSibling
    circle2.style.backgroundColor = 'yellow'
}

const circle = document.getElementById('circle-4')
function testFn() {
    const circle2 = circle.previousElementSibling
    // watch out, there might not always be an element!
    // works for circle 5
    circle2.style.backgroundColor = 'yellow'
}