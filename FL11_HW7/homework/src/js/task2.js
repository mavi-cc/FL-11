let playerNumber;
let currentPrize = 1;
let playerPrize = 0;
let maxRange = 8;
let rand;

const rate = 2;
const maxRangeIncrease = 4;
const number = 1;

let playGame = confirm('Do you want to play a game?');

if (playGame) {
  while (playGame) {
    let maxAttempts = 3;
    let prize = 100;

    rand = Math.floor(Math.random() * (maxRange + number));
    prize *= currentPrize;

    for (; maxAttempts > 0;) {
      playerNumber = +prompt(`Choose a roulette pocket number from 0 to ${maxRange}
Attempts left: ${maxAttempts}
Total prize: ${playerPrize}$
Possible prize for current attempt: ${prize}$`);

      if (playerNumber === rand) {
        playerPrize += prize;
        playGame = confirm(`Congratulation, you won! Your prize is: ${playerPrize}$. Do you want to continue?`);
        break;
      }
      maxAttempts--;
      prize /= rate;

    }
    if (playGame && playerNumber === rand) {
      currentPrize *= rate;
      maxRange += maxRangeIncrease;
    }

    if (!playGame && playerNumber === rand) {
      alert(`Thank you for your participation. Your prize is: ${playerPrize}$`);
      playGame = confirm('Do you want to play again?');

      if (playGame) {
        currentPrize = 1;
        maxRange = rate * rate * rate;
        playerPrize = 0;
      }
    }

    if (playerNumber !== rand) {
      alert(`Thank you for your participation. Your prize is: ${playerPrize}$`);
      playGame = confirm('Do you want to play again?');

      if (playGame) {
        currentPrize = 1;
        maxRange = rate * rate * rate;
        playerPrize = 0;
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}
