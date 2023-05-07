'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "🎊 Correct number!"

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 20
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);

    if( guess !== secretNumber){

        if(score > 1){            
            displayMessage( guess > secretNumber ?  "📈 Too high" : "📉 Too low");
            score--;
        }else{
            document.querySelector('.score').textContent = 0;        
            displayMessage("😭 Game over");
        }
    }else{
        displayMessage("🎊 Correct number!");
        document.querySelector('body').style.backgroundColor = '#60b347';      
        document.querySelector('.number').style.width = '30rem'; 
        document.querySelector('.number').textContent = guess;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    if(score > 0){
        document.querySelector('.score').textContent = score;        
    }else{
        document.querySelector('.score').textContent = 0;        
        displayMessage("😭 Game over");
    }

    

})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;  
    displayMessage("Start guessing...");
    document.querySelector('.number').style.width = '15rem'; 
    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = "?";
})