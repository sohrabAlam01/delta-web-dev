let btn = document.querySelector("button");

let h3 = document.querySelector("h3");

btn.addEventListener('click', function (){
 
    h3.innerText = getRandomColor();
    let div = document.querySelector("div");
    div.innerText =" waw! my color is got changed";
    div.style.backgroundColor = getRandomColor();
     //changing the btn color
     this.style.backgroundColor = getRandomColor();
})

function getRandomColor()
{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}