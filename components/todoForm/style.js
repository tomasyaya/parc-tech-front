import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  input: {
    height: 30,
    width: 250,
    marginVertical: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    color: 'white',
  },
  btn: {
    fontWeight: 'bold'
  },
  errMss: {
    color: 'red',
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})