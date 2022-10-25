"use strict";

const possibleValues = ["rock", "paper", "scissors"];

const getComputerChoice = () =>
  possibleValues[Math.floor(Math.random() * possibleValues.length)];

let computerChoice = getComputerChoice();

const playRound = function (playerSelection, computerSelection) {
  const normalizedUserInput = playerSelection.toLowerCase();
  if (normalizedUserInput === "rock" && computerSelection === "paper") {
    return "You lose, paper beats rock";
  }
  if (normalizedUserInput === "paper" && computerSelection === "rock") {
    return "You win, paper beats rock";
  }
  if (normalizedUserInput === "paper" && computerSelection === "scissors") {
    return "You lose, scissors beats paper";
  }
  if (normalizedUserInput === "scissors" && computerSelection === "paper") {
    return "You win, scissors beats paper";
  }
  if (normalizedUserInput === "rock" && computerSelection === "scissors") {
    return "You win, rock beats scissors";
  }
  if (normalizedUserInput === "scissors" && computerSelection === "rock") {
    return "You lose, rock beats scissors";
  } else {
    return "Draw";
  }
};

let play = playRound("RoCk", computerChoice);

console.log(computerChoice);
console.log(play);

const playRound2 = function (playerSelection, computerSelection) {
  const normalizedUserInput = playerSelection.toLowerCase();

  switch (normalizedUserInput) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "Draw";
        case "paper":
          return "You lose";
        case "scissor":
          return "You win";
        default:
          return "invalid parameter";
      }
      break;

      switch (normalizedUserInput) {
        case "paper":
          switch (computerSelection) {
            case "rock":
              return "You win";
            case "paper":
              return "Draw";
            case "scissor":
              return "You lose";
            default:
              return "invalid parameter";
          }
      }
      break;
      switch (normalizedUserInput) {
        case "scissors":
          switch (computerSelection) {
            case "rock":
              return "You lose";
            case "paper":
              return "You win";
            case "scissors":
              return "Draw";
            default:
              return "invalid parameter";
          }
      }
  }
};

let play2 = playRound2("RoCk", computerChoice);
console.log(play2);
