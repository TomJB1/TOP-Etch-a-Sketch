const container = document.getElementById("grid-container");
const input = document.getElementById("sides-input");
const colorInput = document.getElementById("color-pick");

colorInput.addEventListener("change", changeColor, false);

let color = "black"
create();

function onHover(e)
{
    id = Number(e.target.id);
    hoveredOver = document.getElementById(id);
    hoveredOver.style.backgroundColor = color;
}

function create()
{
    container.innerHTML = "";
    sides = 10;
    sides = Math.min(input.value, 150);
    container.style.setProperty('--side', sides)

    for (let i = 1; i < ((sides*sides)+1); i++)
    {
        square = document.createElement('div');
        square.className = "grid-square outlined"
        square.id = i;   
        container.appendChild(square);
        square.addEventListener("mouseover", onHover);
        square.addEventListener("touchstart", onHover);
        square.addEventListener("touchmove", onHover);
        addOutline(square);
    }
    
    setTimeout(() => { removeOutline() }, 400);
    
}

function changeColor(e)
{
    color = e.target.value;
}

function addOutline(element)
{
    element.style.setProperty('--outline', 'var(--outline-color)');
}

function removeOutline()
{
    squares = document.getElementsByClassName("outlined")
    console.log(squares.length)

    for(var outlined of squares)
    {
        outlined.style.setProperty('--outline', 'var(--clear)');

    }
        

}