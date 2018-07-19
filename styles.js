import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 2,
    marginBottom: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.8
  },
  buffer: {
    flex: 1
  },
  buttons: {
    flex: 1,
    flexDirection: 'row'
  },
  container: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: '#e5d490',
    alignItems: 'center'
  },
  endCaps: {
    backgroundColor: '#6294e5',
    flex: 1
  },
  go: {
    backgroundColor: '#39db73',
    borderRadius: 40,
    height: 80,
    width: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -25,
    left: 115,
    shadowColor: 'grey',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.8
  },
  goText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  guessList: {
    flexDirection: 'row',
    marginTop: 25
  },
  hints: {
    backgroundColor: '#39db73',
    color: 'white'
  },
  inputParent: {
    backgroundColor: 'white',
    borderRadius: 90,
    height: 180,
    width: 180,
    margin: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.8
  },
  input: {
    flexDirection: 'row',
    fontSize: 100,
    height: 180,
    textAlign: 'center',
    width: 180
  },
  reset: {},
  subTitle: {
    color: 'white',
    fontSize: 18,
    textShadowColor: 'grey',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 15,
    textShadowColor: 'grey',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2
  },
  whiteText: {
    paddingBottom: 20,
    color: 'white',
    fontSize: 20,
    alignSelf: 'center'
  }
});
