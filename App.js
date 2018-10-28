import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import styles from './styles';
import Game from './game.js';

initialState = {
  game: new Game(),
  guess: '',
  hint: '',
  pastGuesses: [],
  subTitle: 'Guess a number between 1-100',
  title: 'The Guessing Game',
  toggle: false
};

export default class App extends React.Component {
  state = initialState;

  makeAGuess = () => {
    const guess = Number(this.state.guess);
    let result = this.state.game.playersGuessSubmission(guess);
    if (result == 'win') {
      this.win(guess);
    } else if (result == 'lose') {
      this.lose(guess);
    } else {
      this.setState({
        guess: '',
        pastGuesses: this.state.game.pastGuesses,
        subTitle: result
      });
    }
  };

  hints = () => {
    this.setState({ hint: this.state.game.provideHint() });
  };

  reset = () => {
    this.setState({ ...initialState, game: new Game() });
  };

  win = num => {
    this.setState({
      guess: '',
      title: 'YOU WIN!',
      subTitle: `${num} is correct! Click RESET to play again!`,
      toggle: true
    });
  };

  lose = () => {
    const win = this.state.game.winningNumber;
    this.setState({
      guess: '',
      title: 'YOU LOSE',
      subTitle: `The winning number was ${win}.`,
      toggle: true
    });
  };

  render() {
    const { pastGuesses, toggle } = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <View style={styles.endCaps} />
          <View style={styles.container}>
            <Text style={styles.title}>{this.state.title}</Text>
            <Text style={styles.subTitle}>{this.state.subTitle}</Text>
            <View style={styles.inputParent}>
              <TextInput
                style={styles.input}
                disabled={toggle}
                placeholder="#"
                value={this.state.guess}
                onChangeText={guess => this.setState({ guess })}
                onSubmitEditing={() => this.makeAGuess()}
                keyboardType={'decimal-pad'}
              />
              <TouchableOpacity
                style={styles.go}
                onPress={() => this.makeAGuess()}
                disabled={toggle}
              >
                <Text style={styles.goText}>Go!</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hints}>
              <Text style={styles.hintText}>{this.state.hint}</Text>
            </View>
            <View style={styles.guessList}>
              <View style={styles.buffer} />
              {pastGuesses.map((num, i) => (
                <View style={styles.box} key={i}>
                  <Text style={styles.guess}>{num}</Text>
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
                onPress={() => this.hints()}
                disabled={toggle}
                title="Need a hint?"
                style={styles.hints}
                accessibilityLabel="Need a hint?"
              />
            </View>
          </View>
          <View style={styles.endCaps} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
