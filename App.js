import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import AppNavigator from './navigation/main';


const store = configureStore()


export default class App extends Component {
  
  render() {
    
    return (
      <Provider store={store}>
          <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


