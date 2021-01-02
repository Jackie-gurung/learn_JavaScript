// games value 
let max = 20,
    min = 1,
    winningNum = getRandomNum(min,max),
    guessLeft = 3;

// UI values 
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign min and max 
minNum.textContent = min;
maxNum.textContent = max;

// event listener for play again 
guessBtn.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

// listen for guess 
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);

    // validate 
    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }
    else{
        // if Win 
        if (guess === winningNum) {
            gameOver(true, `${winningNum} is the correct guess. CONGRATULATION`)
        } else {
            guessLeft -= 1;
            if (guessLeft === 0) {
                gameOver(false, `GAME OVER. YOU LOST. The correct number was ${winningNum}`);
            } else {
                // game continue 
                // clear input 
                guessInput.value = '';
                // change border color 
                guessInput.style.borderColor = 'red';
                // set message 
                setMessage(`${guess} is not correct. You have ${guessLeft} guesses left`, 'red');
            }

        }
    }
    
});

function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'gray';
    // disable input 
    guessInput.disabled = true;
    // change border color 
    guessInput.style.borderColor = color;
    // set message 
    setMessage(msg,color);

    // play Again 
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min + 1) + min);
}