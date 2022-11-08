let points = 0; 
let number1 = 0; 
let number2 = 0; 
let high;
let answer;
let equal;
let low; 
let image = `<img src="img/kitty.png" width="280px" height="200px">`;
let application = document.getElementById(`app`);

pointGenerator()
updateview()
function updateview(){
    application.innerHTML = /*HTML*/ `
    <h1>Feed the cat!</h1>
    <h3>The cat wants BIG numbers ONLY!</h3>
    <div>YumYum points: ${points}</div>
    <div>${image}</div>
    <div class="number">${number1}</div>
    <div class="image" onclick="checkNumberHigh()"><img src="img/arrowup.png" width="50px" height="50"></div>
    <div class="image" onclick="checkNumberEqual()"><img src="img/equal.png" width="50px" height="50"></div>
    <div class="image" onclick="checkNumberLow()"><img src="img/arrowdown.png" width="50px" height="50"></div>
    <div class="number">${number2}</div>
    `;
    
}

function pointGenerator(){
    number1 = Math.floor(Math.random()*10) +1;
    number2 = Math.floor(Math.random()*10) +1;
     if(points == -10){
        image = `<img src="img/grumpycat.png" width="280px" height="200px">`;
    };
}

function checkNumberHigh(){
    number1 > number2 ? points++ : points--;
    pointGenerator()
    updateview();
}

function checkNumberEqual(){
    equal = number1 === number2 ? points++ : points--;
    pointGenerator()
    updateview();
}

function checkNumberLow(){
    low = number1 < number2 ? points++ : points--;
    pointGenerator()
    updateview();
}