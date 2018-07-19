import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import Game from './game.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.game = new Game();
  }

  state = {
    // game: new Game(),
    guess: '',
    hint: '',
    pastGuesses: [],
    subTitle: 'Guess a number between 1-100',
    title: 'The Guessing Game',
    toggle: false
  };

  makeAGuess = () => {
    console.log('this.state.guess', this.state.guess);
    const guess = Number(this.state.guess);
    console.log('guess', guess);
    let result = this.game.playersGuessSubmission(guess);
    console.log('result = ', result);
    if (result == 'win') {
      this.win(guess);
    } else if (result == 'lose') {
      this.lose(guess);
    } else {
      this.setState({
        guess: '',
        pastGuesses: this.game.pastGuesses,
        subTitle: result
      });
    }
  };

  hints = () => {
    this.setState({ hint: this.game.provideHint() });
  };

  reset = () => {
    this.game = new Game();
    this.setState({
      // game: new Game(),
      title: 'The Guessing Game',
      toggle: false,
      subTitle: 'Guess a number between 1-100'
    });
  };

  win = num => {
    this.setState({
      title: 'YOU WIN!',
      subTitle: `${num} is correct! Click RESET to play again!`,
      toggle: true
    });
  };

  lose = () => {
    const win = this.game.winningNumber;
    this.setState({
      title: 'YOU LOSE',
      subTitle: `The winning number was ${win}.`,
      toggle: true
    });
  };

  inputChange = input => {
    this.setState({
      guess: input
    });
  };

  render() {
    const pastGuesses = this.game.pastGuesses;
    const toggle = this.state.toggle;
    const nums = [1, 2, 3, 4, 5];
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.endCaps} />
        <View style={styles.container}>
          <Text style={styles.title}>The Guessing Game</Text>
          <Text style={styles.subTitle}>{this.state.subTitle}</Text>
          <View style={styles.inputParent}>
            <TextInput
              style={styles.input}
              disabled={toggle}
              placeholder="#"
              value={this.state.guess}
              onChangeText={g => this.setState({ guess: g })}
              onSubmitEditing={() => this.makeAGuess()}
            />
            <TouchableOpacity
              style={styles.go}
              onPress={() => this.makeAGuess()}
              disabled={toggle}
            >
              <Text style={styles.goText}>Go!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.guessList}>
            <View style={styles.buffer} />
            {nums.map((num, i) => (
              <View style={styles.box} key={i}>
                <Text style={styles.whiteText}>{num}</Text>
              </View>
            ))}
            <View style={styles.buffer} />
          </View>
          <View style={styles.buttons}>
            <Button
              onPress={this.reset}
              title="Reset"
              color="#841584"
              accessibilityLabel="Click here to reset game"
            />
            <Button
              onPress={this.hints}
              disabled={toggle}
              title="Need a hint?"
              style={styles.hints}
              accessibilityLabel="Need a hint?"
            />
          </View>
        </View>
        <View style={styles.endCaps} />
      </View>
    );
  }
}
