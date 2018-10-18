
let currentColor 
const colorGrid = document.querySelector('.color-container')
const colorArray = ['red', 'salmon', 'crimson', 'pink', 'palevioletred', 'coral', 'orangered', 'orange', 'gold', 'yellow', 'lemonchiffon', 'moccasin', 'palegoldenrod', 'khaki', 'darkkhaki','palegreen', 'springgreen', 'mediumseagreen', 'seagreen', 'green', 'olive', 'darkolivegreen', 'darkseagreen', 'lightseagreen', 'darkcyan', 'paleturquoise', 'mediumturquoise', 'cadetblue', 'steelblue', 'skyBlue', 'dodgerblue', 'royalblue', 'blue', 'darkblue', 'midnightblue', 'mediumpurple','purple', 'rebeccapurple', 'darkslateblue','black']

colorArray.forEach(function(color){
    const colorDiv = document.createElement('div')
    colorDiv.classList.add('btn-group', `${color}Button`)
    colorDiv.addEventListener('click', function(event){
        currentColor = color
    })
    colorGrid.appendChild(colorDiv)
}) 

const grid = document.querySelector('.grid-container')
const cellCount = 1200
for(let i=0; i<cellCount; i++){
    let div = document.createElement('div')
    div.classList.add("grid-item")
    grid.appendChild(div)
    div.addEventListener('click', function(event){
        event.target.classList.toggle(currentColor+'Button')
    })
}
