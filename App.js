import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import axios from 'axios';

const store = configureStore()

export default class App extends React.Component {
  
  render() {
    
    return (
      <Provider store={store}>
        <View >
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}


