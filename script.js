const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const possibleValues = [ROCK, PAPER, SCISSOR];

let getComputerChoice = () =>
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

const round = playRound(
  prompt("Choose rock, paper or scissor:"),
  computerChoice
);

console.log(round);

function game() {
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    if (
      !playRound(prompt("Choose rock, paper or scissor:"), getComputerChoice())
    ) {
      computerWins++;
    }
  }
  if (computerWins >= 3) {
    console.log("Computer won!");
  }
}

const playGame = game();
