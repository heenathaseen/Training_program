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