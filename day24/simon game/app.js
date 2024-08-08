let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let scored = 0;
let score = document.querySelector("#curr_score");
let highest_score = 0;
let high = document.querySelector("#Highest_score");
let new_score = 0;
let  btns = ["green", "red", "yellow", "blue"];
h3 = document.querySelector("h3");

//audio

let mp3 = document.querySelector("#mp3");
/*
window.addEventListener('load', () => {
    mp3.play();
});
*/



let restart = document.querySelector(".start");

restart.addEventListener("click", function(event){

    if(started == false)
    {
        started = true;
        score.innerText = `Score: ${0}`;
        levelUp();
    }
   
});


document.addEventListener("keypress", function(event){

    if(started == false)
    {
        started = true;
        score.innerText = `Score: ${0}`;
        levelUp();
    }
})

function gameFlash(btn)
{
  btn.classList.add("gameflash");

  setTimeout(function(){
    btn.classList.remove("gameflash");
  }, 250);
}

function userFlash(btn)
{
  btn.classList.add("userFlash");
  
  setTimeout(function(){
    btn.classList.remove("userFlash");
  }, 250);
}


function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    //choosing a random button
  let randIndex = Math.floor(Math.random()*3+0.5);
  let randColor = btns[randIndex];
  let randBtn = document.querySelector(`.${randColor}`);
  
  gameSeq.push(randColor);
  console.log(gameSeq)
  gameFlash(randBtn);
}


//function to match the user seq and game seq
function checkMatch(index){
    if(userSeq[index] === gameSeq[index])
    {
        if(userSeq.length == gameSeq.length)
        {
          
            new_score = level*100;
            score.innerText = `Score: ${new_score}`;
            if(new_score > highest_score){
                highest_score = new_score;
                high.innerText = `Highest Score: ${highest_score}`;
               }
           setTimeout(levelUp, 1000);
           
        }
    }
    else{
        h3.innerText = "Game over! press any key to restart";

        mp3.play();
       //showing red flag when for 0.25 sec when game is over

       let main = document.querySelector(".main");
       main.classList.add("red_flag");
       setTimeout(function(){
        main.classList.remove("red_flag");
       }, 2000);
      
      
       
      
        reset();
    }
}

function btnPress(){
  let btn = this;
  
  if(level!=0)userFlash(btn);
  let btnColor = btn.getAttribute("id");
  userSeq.push(btnColor);
  
  checkMatch(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);

}

function reset()
{
 started = false;
 gameSeq = [];
 userSeq = [];
 level = 0;
 new_score = 0;
 scored = 0;
 
}

