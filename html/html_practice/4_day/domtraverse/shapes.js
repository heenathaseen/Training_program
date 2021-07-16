// we are adding this timeout
// so that we can see the before/after view
setTimeout(testFn, 2000)

// const circle = document.getElementById('circle-4')
// function testFn() {
//     const circle1 = document.getElementById('circle-1')
//     circle1.classList.add('red-text')
// }
const outerRectangle = document.getElementById('outer-rectangle-1')

function testFn() {
    const squares = outerRectangle.querySelectorAll('.square')
    for(let square of squares) {
        console.log(square.id)
        square.classList.add('red-text')
    }
}

/*
<div class="square" id="square-1">
                <p>Box #1</p>
                <p>Box #1</p>            
            </div>
*/

/*
.red-text {
    color: red;
}

.blue-border {
    border-color: blue;
    border: solid;
}

*/