
let currentColor 
const colorGrid = document.querySelector('.color-container')
const colorArray = ['red', 'orange', 'yellow', 'green', 'skyBlue', 'blue', 'purple','black', 'white']

colorArray.forEach(function(color){
    const colorDiv = document.createElement('div')
    colorDiv.classList.add('btn-group', `${color}Button`)
    colorDiv.addEventListener('click', function(event){
        currentColor = color
    })
    colorGrid.appendChild(colorDiv)
}) 

const grid = document.querySelector('.grid-container')
for(let i=0; i<1200; i++){
    let div = document.createElement('div')
    div.classList.add("grid-item")
    grid.appendChild(div)
    div.addEventListener('click', function(event){
        event.target.classList.toggle(currentColor+'Button')
    })
}

