const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const possibleValues = [ROCK, PAPER, SCISSOR];

const getComputerChoice = () =>
  possibleValues[Math.floor(Math.random() * possibleValues.length)];

const computerChoice = getComputerChoice();

const playRound = function (playerSelection, computerSelection) {
  const normalizedPlayerSelection = playerSelection.toLowerCase();
  const normalizedComputerSelection = computerSelection.toLowerCase();

  switch (normalizedPlayerSelection) {
    case ROCK: {
      switch (normalizedComputerSelection) {
        case ROCK:
          console.log("Draw");
          return false;
        case PAPER:
          console.log("You lose (rock < paper)");
          return false;
        case SCISSOR:
          console.log("You win (rock > scissor)");
          return true;
        default:
          return `Invalid selection: ${normalizedComputerSelection}`;
      }
    }
    case PAPER: {
      switch (normalizedComputerSelection) {
        case ROCK:
          console.log("You win (paper > rock)");
          return true;
        case PAPER:
          console.log("Draw");
          return false;
        case SCISSOR:
          console.log("You lose (paper < scissor)");
          return false;
        default:
          return `Invalid selection: ${normalizedComputerSelection}`;
      }
    }
    case SCISSOR: {
      switch (normalizedComputerSelection) {
        case ROCK:
          console.log("You lose (scissor < rock)");
          return false;
        case PAPER:
          console.log("You win (scissor > paper)");
          return true;
        case SCISSOR:
          console.log("Draw");
          return false;
        default:
          return `Invalid selection: ${normalizedComputerSelection}`;
      }
    }
    default:
      return `Invalid selection: ${normalizedPlayerSelection}`;
  }
};

const round = playRound("rock", computerChoice);

console.log(round);

const game = function () {
  let computerWinCount = 0;
  for (let i = 0; i < 5; i++) {
    if (round === true) {
      computerWinCount++;
    }
  }
  return computerWinCount;
};

console.log(game());
