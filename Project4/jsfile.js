let random = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const loworHi = document.querySelector('.loworHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

// check is input number is btw 1 and 100
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if(guess<1){
        alert('Please enter the number greater than 1');
    } else if(guess>100){
        alert('Please enter the number less than 100')
    }else{
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over!The random number was: ${random}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// checks if the number input number is equal to random
function checkGuess(guess){
    if(guess === random){
        displayMessage(`YOU WON! You guess the number right`)
        endGame();
    }else if(guess < random){
        displayMessage(`Number is Too low!`)
    }else if(guess > random){
        displayMessage(`Number is Too High`)
    }
}

// clean the values will update the array and show the prev guess
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

// display the maessage
function displayMessage(message){
    loworHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
    startOver.appendChild(p);
    
    playGame = false;
    newGame();
}

function newGame(){
    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click',function(e){
        random = parseInt(Math.random()*100 +1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML=''
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

