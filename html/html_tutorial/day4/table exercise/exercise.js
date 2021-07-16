const content = [
    {
        name: 'Hibiscus',
        desc: 'We have native and hybrid varieties in all colours. Red is the best',
        season: 'Year-round',
        container: '12" pot'
    },
    {
        name: 'Rose',
        desc: 'We have native and hybrid varieties in all colours. Pink Paneer rose is the best',
        season: 'Year-round',
        container: '12" pot'
    }
]


const tableDiv = document.getElementById('dynamic-table')

let table = document.createElement('table')
tableDiv.appendChild(table)

let head = table.createTHead()
headerRow = head.appendChild(document.createElement('tr'))

let header = headerRow.appendChild(document.createElement('th'))
header.appendChild(document.createTextNode('Name'))

header = headerRow.appendChild(document.createElement('th'))
header.appendChild(document.createTextNode('Description'))
header.classList.add('wideCell')

header = headerRow.appendChild(document.createElement('th'))
header.appendChild(document.createTextNode('Flowering Season'))

header = headerRow.appendChild(document.createElement('th'))
header.appendChild(document.createTextNode('Container Size'))
header.classList.add('narrowCell')

let body = table.createTBody()
bodyRow = body.appendChild(document.createElement('tr'))

let cell = bodyRow.appendChild(document.createElement('td'))
cell.appendChild(document.createTextNode('Hibiscus'))

cell = bodyRow.appendChild(document.createElement('td'))
cell.appendChild(document.createTextNode('We have native and hybrid varieties in all colours. Paneer rose is best suited to Chennai climate.'))

cell = bodyRow.appendChild(document.createElement('td'))
cell.appendChild(document.createTextNode('Year-round'))

cell = bodyRow.appendChild(document.createElement('td'))
cell.appendChild(document.createTextNode('12" pot'))