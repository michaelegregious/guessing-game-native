export default class Game {
  constructor() {
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = _generateWinningNumber();
    this.hintsCounter = 0;
  }

  playersGuessSubmission = num => {
    console.log('num inside of playersGuess = ', num);
    if (isNaN(num) || num < 1 || num > 100) {
      throw `Input ${num} is not a valid guess`;
    }
    this.playersGuess = num;
    return this.checkGuess(num);
  };

  checkGuess = num => {
    if (num == this.winningNumber) {
      return 'win';
    }
    if (this.pastGuesses.includes(num)) {
      return 'You have already guessed that number.';
    }
    this.pastGuesses.push(num);

    if (this.pastGuesses.length > 4) {
      return 'lose';
    }
    if (this.difference() < 5) {
      return this.isLower()
        ? "You're on fire! Guess higher!"
        : "You're on fire! Guess lower!";
    }

    if (this.difference() < 10) {
      return this.isLower()
        ? "You're burning up! Guess higher!"
        : "You're burning up! Guess lower!";
    }

    if (this.difference() < 25) {
      return this.isLower()
        ? "You're lukewarm. Guess higher."
        : "You're lukewarm. Guess lower.";
    }

    if (this.difference() < 50) {
      return this.isLower()
        ? "You're a bit chilly. Guess higher."
        : "You're a bit chilly. Guess lower.";
    }

    if (this.difference() < 100) {
      return this.isLower()
        ? "You're ice cold. Guess higher."
        : "You're ice cold. Guess lower.";
    }
  };

  provideHint = () => {
    if (this.pastGuesses.length == 0) {
      return 'Try taking a guess before asking for help.';
    } else if (this.hintsCounter == 0) {
      this.hintsCounter++;
      return this.evenHint();
    } else if (this.hintsCounter == 1) {
      this.hintsCounter++;
      return this.fibHint();
    } else if (this.hintsCounter == 2) {
      this.hintsCounter++;
      let arr = this.generateThreeHints();
      return `Try one of these: ${arr[0]}, ${arr[1]} or ${arr[2]}.`;
    } else {
      return `You've run out of hints!`;
    }
  };

  isLower = () => {
    return this.playersGuess < this.winningNumber;
  };

  difference = () => {
    return Math.abs(this.playersGuess - this.winningNumber);
  };

  evenHint = () => {
    return this.winningNumber % 2 == 0
      ? "It's an even number."
      : "It's an odd number.";
  };

  fibHint = () => {
    let arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
      win = this.winningNumber,
      closest;
    if (arr.includes(win)) {
      return 'It happens to be one of those lovely, golden Fibonacci numbers.';
    }
    closest = arr.reduce(function(a, b) {
      return Math.abs(a - win) < Math.abs(b - win) ? a : b;
    });

    return closest > win
      ? `It's ${closest - win} shy of its nearest Fibonacci number.`
      : `It's ${win - closest} greater than its nearest Fibonacci number.`;
  };

  generateThreeHints = () => {
    let arr = [this.winningNumber, ...this.pastGuesses].sort((a, b) => a - b),
      index = arr.indexOf(this.winningNumber),
      min = arr[index - 1] || 0,
      max = arr[index + 1] || 101;

    return [
      getRandomInt(min, max),
      getRandomInt(min, max),
      this.winningNumber
    ].sort((a, b) => a - b);
  };
}

_generateWinningNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};
