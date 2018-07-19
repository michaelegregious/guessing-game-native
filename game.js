export default class Game {
  constructor() {
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = generateWinningNumber();
    this.hintsCounter = 0;
  }

  playersGuessSubmission = num => {
    if (isNan(num) || num < 1 || num > 100) {
      throw 'That is not a valid guess.';
    }
    this.playersGuess = num;
    return this.checkGuess(num);
  };

  checkGuess = num => {
    if (num == this.winningNumber) {
      // some Logic here
    }
  };

  difference = () => {
    return Math.abs(this.playersGuess - this.winningNumber);
  };

  isLower = () => {
    return this.playersGuess < this.winningNumber;
  };
}

generateWinningNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};
