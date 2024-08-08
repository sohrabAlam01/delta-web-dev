let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener('click', function(){

    let item = document.createElement("li");
    item.innerText = inp.value;
    if(inp.value !="") ul.appendChild(item);
    

    let dltbtn = document.createElement("button");
     dltbtn.innerText = "Remove";
     dltbtn.classList.add("remove");
    if(inp.value !="") item.appendChild(dltbtn);
    inp.value = "";
})

//delete button functioning


// Note: it will not work for the new added list item. we'll go for event delegation
/*
let dltbtns = document.querySelectorAll(".remove");

for (dltbtn of dltbtns)
{
    dltbtn.addEventListener('click', function(){
        let para = this.parentElement;
        para.remove();
    })
}
    */

//event delegation : going to trigger the event on the parent and find which element of the parent is trigerred called target element 
//and accordingly we will take the action

ul.addEventListener('click', function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});