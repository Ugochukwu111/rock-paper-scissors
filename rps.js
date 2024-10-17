
let score = JSON.parse(localStorage.getItem('score')) ||  {
   wins: 0,
   loses: 0,
   ties: 0
  };

  let isAutoPlaying = false


  updateScoreElement()

let computerMove = '';
let result = '';
let conEl = document.querySelector('.container');

function pickComputerMove(){
  let randomnumber = Math.random();
  if (randomnumber >= 0 && randomnumber < 1 / 3) {
     computerMove = 'rock';
  } else if(randomnumber >= 1 / 3 && randomnumber < 2 / 3){
     computerMove = 'paper';
  }else if(randomnumber >= 2 /3 && randomnumber <  1) {
      computerMove = 'scissors';
  }
  console.log (computerMove);
  return computerMove
}


function rock(){
playGame('rock')
}

function paper() {
   playGame('paper')
}

function scissors() {
   playGame('scissors')
}

function playGame(playerMOve) {
   pickComputerMove()
   let result = '';
   // code for scissors
   if (playerMOve === 'scissors'){
      if (computerMove === 'rock') {
         result = 'you lose'
      }else if (computerMove === 'paper'){
        result = 'you win'
      }else if(computerMove === 'scissors'){
        result = 'tie'
      }
      // code for paper
   }else if(playerMOve === 'paper'){
      if (computerMove === 'rock') {
         result = 'you win'
      }else if (computerMove === 'paper'){
        result = 'tie'
      }else if(computerMove === 'scissors'){
        result = 'you lose'
      }
      // code for rock
   }else if (playerMOve === 'rock') {
      if (computerMove === 'rock') {
         result = 'tie'
      }else if (computerMove === 'paper'){
        result = 'you lose';
      }else if(computerMove === 'scissors'){
        result = 'you win'
      }
   }


   if (result === 'you win') {
       score.wins += 1
   }else if (result === 'you lose') {
      score.loses += 1
   }else if (result === 'tie') {
     score.ties += 1
   }

   localStorage.setItem('score', JSON.stringify(score))

updateScoreElement()

document.querySelector('.js-result')
.innerHTML = `${result}`

document.querySelector('.js-moves')
.innerHTML = `You ${playerMOve} - ${computerMove} computer `
 
   // alert(`you picked ${playerMOve}. Computer picked ${computerMove}. ${result}
   // wins: ${score.wins}, loses: ${score.loses},ties: ${score.ties}`)
}

function updateScoreElement() {
   document.querySelector('.js-score')
   .innerHTML = `  wins: ${score.wins},  loses: ${score.loses},  ties: ${score.ties}`;
}

function reset() {
   score.wins = 0
   score.loses = 0
   score.ties = 0;
   localStorage.removeItem('score')
   updateScoreElement()
}

let intervalId;

function autoPlay() {
   if (!isAutoPlaying){
     intervalId = setInterval(function() {
         let playerMove = pickComputerMove()
         playGame(playerMove)
      } , 1000)
      isAutoPlaying = true
   }else{
        clearInterval(intervalId);
        isAutoPlayingfalse;
   }
   
 
}