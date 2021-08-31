console.log(document.getElementById("clickEvent"));  //to check if works

let score = parseInt(localStorage.getItem("count"));
// let clickingPower = 1;
document.getElementById("clickEvent").addEventListener('click',addToScore);
document.getElementById("resetButton").addEventListener('click',resetScore);
document.querySelector("#multiplied").style.display = "none";


console.info(document.getElementById("myScore").innerHTML);  //to check if works
document.getElementById("myScore").innerHTML = score;

let lastClicked = 0;
let amount = 1;
let clicks = 0;

function addToScore(){
    let timeNow = (new Date()).getTime()
    console.info(timeNow)
    document.querySelector("#multiplied").style.display = "none";
    if(lastClicked == 0){
        score = parseInt(score + amount);
        tenPoints = score + amount
        lastClicked = timeNow;
    }else{
        if((timeNow-lastClicked)<175){  //defines clicking speed for multiply
            score = parseInt(score + amount*2);
            tenPoints = score + amount;
            lastClicked = timeNow;
            document.querySelector("#multiplied").style.display = "flex";
        }else{
            score = parseInt(score + amount);
            tenPoints = score + amount;
            lastClicked = timeNow;
        }
    }

    clicks = clicks + 1; // after 10 clicks bonus 3 points
    if(clicks == 10){  
        score = score + 3;
        clicks = 0;
      }

    localStorage.setItem("count", score);
    console.info(score)  //to check if works
    document.getElementById("myScore").innerHTML = score;
}


function resetScore(){
    localStorage.setItem("count", 0);
    score = 0
    document.getElementById("myScore").innerHTML = score;
}