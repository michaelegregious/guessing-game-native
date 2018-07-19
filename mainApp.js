import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class mainApp extends React.Component {
  state = {
    playersGuess: null,
    pastGuesses: [],
    winningNumber: generateWinningNumber(),
    hintsCounter: 0
  };

  playersGuessSubmission = num => {
    if (isNaN(num) || num < 1 || num > 100) {
      throw 'That is an invalid guess.';
    }
    this.setState({
      playersGuess: num
    });
    return this.checkGuess(num);
  };

  checkGuess = num => {
    if (num == this.state.winningNumber) {
    }
  };

  render() {
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text>Guessing Game</Text>
        <Text>Guess a number between 1-100!</Text>
      </View>
      <View style={styles.main}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
        />
      </View>
    </View>;
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: 'green',
    alignItems: 'center'
  },
  main: {}

  // container: {
  //   flex: 2,
  //   flexDirection: 'row',
  //   backgroundColor: 'skyblue',
  //   alignItems: 'center'
  // },
  // box: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   height: 50,
  //   justifyContent: 'center',
  //   borderColor: 'white',
  //   borderWidth: 0.5
  // },
  // whiteText: {
  //   paddingBottom: 20,
  //   color: 'white',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   alignSelf: 'center'
  // }
});
