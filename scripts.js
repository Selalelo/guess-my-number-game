'use strict';

let number =  Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;
const message = document.querySelector(`.message`);

const checkButton = document.querySelector('.check');
const inputField = document.querySelector(`input`); 
checkButton.addEventListener('click', function(){
const guess = Number((inputField.value));
if (!guess){
    message.textContent = `No number`;

    // if a player wins
}else if(guess === number){
    message.textContent = `Correct number`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.guess`).style.color = `#60b347`;
    inputField.style.backgroundColor = `#60b347`;
    document.querySelector(`.guess`).textContent = number;
    if (score > highScore){
        highScore = score;
        document.querySelector(`.high-score`).textContent = highScore;
    }

    //if guess is greater than secret number
}else if(guess > number){
    if(score > 1){
        message.textContent = `Guess too high`;
        score--;    
        document.querySelector(`.score`).textContent = score;
    }
    else{
        message.textContent = `You have lost the game`;
        document.querySelector(`.score`).textContent = 0;
    }

    // if guess is less than the secret number
}else if(guess < number){
    if (score > 1){
        message.textContent = `Guess too low`;
        score--;
        document.querySelector(`.score`).textContent = score;
    }
    else{
        message.textContent = `You have lost the game`;
        document.querySelector(`.score`).textContent = 0;
    }
    
}

}
);

document.querySelector(`.play-again`).addEventListener(`click`, function(){
    message.textContent = `Start guessing`;
    document.querySelector(`body`).style.backgroundColor = `black`;
    document.querySelector(`.guess`).style.color = `black`;
    inputField.style.backgroundColor = `black`;
    document.querySelector(`.guess`).textContent = `?`;
    score = 20;
    document.querySelector(`.score`).textContent = score;
    const number =  Math.trunc(Math.random()*20) + 1;
    inputField.value = ` `;

})

document.addEventListener(`keyup`,(e) => {
    if (e.key ==="Enter") checkButton.click();

})



