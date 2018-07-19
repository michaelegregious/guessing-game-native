import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from './styles';
import Game, { makeAGuess } from './game.js';

export default class App extends React.Component {
  state = {
    game: new Game(),
    guess: '',
    subTitle: 'Guess a number between 1-100'
  };

  makeAGuess = input => {
    let guess = Number(input);
    let result = this.state.game.playersGuessSubmission(guess);
    this.setState({
      guess: '',
      subTitle: result
    });
  };

  reset = () => {};

  hints = () => {};

  render() {
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
              placeholder="#"
              onChangeText={text => this.setState({ guess: text })}
            />
            <View style={styles.go} onIconClicked={this.makeAGuess}>
              <Text style={styles.goText}>Go!</Text>
            </View>
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
