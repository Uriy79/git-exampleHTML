/*let score = {
    wins: 0,
    losses: 0,
    ties: 0
};*/
 let score = JSON.parse(localStorage.getItem
    ('score'));

if (score === null){
    score={
        wins: 0,
        losses: 0,
        ties: 0
    };
}
function playGame(playerMove) {
    let computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'rock') {

        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove = 'paper') {
            result = 'You Win!!!';
        } else {
            result = 'You Loose!!!';
        }

    }else if(playerMove === 'paper'){

        if (computerMove === 'rock') {
            result = 'You Win!!!';
        } else if (computerMove = 'paper') {
            result = 'Tie';
        } else {
            result = 'You Loose!!!';
        }

    }else if(playerMove === 'scissors'){

        if (computerMove === 'rock') {
            result = 'You Loose!!!';
        } else if (computerMove = 'paper') {
            result = 'You Win!!!';
        } else {
            result = 'Tie';
        }
    }

    if (result === 'You Win!!!'){
        score.wins +=1;
    }else if (result === 'You Loose!!!'){
        score.losses +=1;
    }else if (result ==='Tie'){  
        score.ties +=1;  
    }

    localStorage.setItem('score', JSON.stringify
    (score));

alert(`Your choice is ${playerMove}, Computer picked
${computerMove}. ${result}
wins: ${score.wins}, Losses: ${score.
losses}, Ties ${score.ties}`);

}


function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
};


 const product2 = {
    name: 'shirt'
 };
 console.log(product2);
 console.log(product2.name);

fun: function function1(){
    console.log('function inside object');
}
//stringify object product2 FROM JS TO JSON string
JSON.stringify(product2); 
//stringify BACK TO JS
const jsonString = JSON.stringify(product2);
JSON.parse(jsonString);
