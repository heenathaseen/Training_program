// how to attach a listener
const greyRect1 = document.getElementById('outer-rectangle-1')
greyRect1.addEventListener('click', e => {
    console.log(`Hello! you clicked me!`)
})

// what you can do in a listener
const greyRect1 = document.getElementById('outer-rectangle-1')
clickCnt = 0;
greyRect1.addEventListener('click', e => {
    console.log(`Hello! you clicked me ${++clickCnt} time(s)`)
})

// you can add state to the html element
// in our script, not in the HTML itself
const greyRect1 = document.getElementById('outer-rectangle-1')
greyRect1.clickCnt = 0;
greyRect1.addEventListener('click', e => {
    console.log(`Hello! you clicked me ${++greyRect1.clickCnt} time(s)`)
})

// you can use the target attribute to access
// the element you clicked
const greyRect1 = document.getElementById('outer-rectangle-1')
greyRect1.addEventListener('click', e => {
    let greyDiv = e.target
    greyDiv.clickCnt = greyDiv.clickCnt || 0
    console.log(`Hello! you clicked me ${++greyDiv.clickCnt} time(s)`)
})

// listeners can be added on any element
const greyRect = document.querySelectorAll('.outer-rectangle')
// you can add a listener to all of the elements
greyRect.forEach(element => {
    element.addEventListener('click', e => {
        console.log(`You clicked: ${e.target.id}`)
    })
});

// events bubble, so we must be wary
const greyRect1 = document.getElementById('outer-rectangle-1')
const blueRect1 = document.getElementById('inner-rect-1')
const circle1 = document.getElementById('circle-1')

greyRect1.addEventListener('click', e => {
    console.log('you clicked the grey rectangle')
})

blueRect1.addEventListener('click', e => {
    console.log('you clicked the blue rectangle')
})

circle1.addEventListener('click', e => {
    console.log('you clicked the circle')
})

document.body.addEventListener('click', e => {
    console.log('you clicked the body')
})


// capturing is top down
const greyRect1 = document.getElementById('outer-rectangle-1')
const blueRect1 = document.getElementById('inner-rect-1')
const circle1 = document.getElementById('circle-1')

greyRect1.addEventListener('click', e => {
    console.log('you clicked the grey rectangle')
}, {capture: true})

blueRect1.addEventListener('click', e => {
    console.log('you clicked the blue rectangle')
}, {capture: true})

circle1.addEventListener('click', e => {
    console.log('you clicked the circle')
}, {capture: true})

document.body.addEventListener('click', e => {
    console.log('you clicked the body')
}, {capture: true})

// how to stop event propagation so that
// no unwanted actions are trigged
const greyRect1 = document.getElementById('outer-rectangle-1')
const blueRect1 = document.getElementById('inner-rect-1')
const circle1 = document.getElementById('circle-1')

greyRect1.addEventListener('click', e => {
    console.log('you clicked the grey rectangle')
})

blueRect1.addEventListener('click', e => {
    console.log('you clicked the blue rectangle')
    // note this line
    // it stops propagation irrespective of where the event originated
    e.stopPropagation()
})

circle1.addEventListener('click', e => {
    console.log('you clicked the circle')
})

document.body.addEventListener('click', e => {
    console.log('you clicked the body')
})

// listeners can be added on any element
const circles = document.querySelectorAll('.circle')
// you can add a listener to all of the elements
circles.forEach(element => {
    element.addEventListener('click', changeTargetTextColour)
})

function changeTargetTextColour(e) {
    e.target.style.color = 'red'
}

// remove listeners
const circle1 = document.getElementById('circle-1')
circle1.removeEventListener('click', changeTargetTextColour)

// add additional listeners
// add a second listener
const circle2 = document.getElementById('circle-2')
circle2.addEventListener('click', e => {
    console.log(`you clicked on ${e.target.id}`)
})

// access to the target means you can do anything
// you would with any element
const circles = document.querySelectorAll('.circle')
// you can add a listener to all of the elements
circles.forEach(element => {
    element.addEventListener('click', changeTargetTextColour)
    element.addEventListener('click', changeParentColour)
})

function changeTargetTextColour(e) {
    e.target.style.color = 'red'
}

function changeParentColour(e) {
    e.target.parentElement.style.backgroundColor = 'yellow'
}

// finally, you can delegate
document.addEventListener('click', e => {
    console.log(`You clicked on ${e.target.id}`)
    if(e.target.matches('.circle')) {
        changeTargetTextColour(e)
    }
})

function changeTargetTextColour(e) {
    e.target.style.color = 'red'
}

const elementSpan = document.getElementById('hover-span')
const elementXpan = document.getElementById('hover-x-span')
const elementYSpan = document.getElementById('hover-y-span')

document.addEventListener('mouseover', e => {
    let target = e.target
    if(target.id) {
        elementSpan.innerText = target.id
        elementXpan.innerText = e.pageX
        elementYSpan.innerText = e.pageY
    }
})

document.addEventListener('mouseout', e => {
    let target = e.target
    if(target.id) {
        elementSpan.innerText = ''
        elementXpan.innerText = ''
        elementYSpan.innerText = ''
    }
})
