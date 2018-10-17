const colorArray = ['red', 'orange', 'yellow', 'green', 'skyBlue', 'blue', 'purple','black', 'white']
let currentColor

 colorArray.forEach(function(color) {
        const buttonSelector = `${color}Button`
        const currentButton = document.querySelector(`div.btn-group.${buttonSelector}`)
        currentButton.addEventListener('click', function(even){
            currentColor = color
        })
   });

const grid = document.querySelector('.grid-container')
for(let i=0; i<1200; i++){
    let div = document.createElement('div')
    div.classList.add("grid-item")
    grid.appendChild(div)
    div.addEventListener('click', function(event){
        event.target.classList.toggle(currentColor+'Button')
    })
}