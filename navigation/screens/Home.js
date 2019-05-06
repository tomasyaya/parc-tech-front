import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  
  render() {
    console.log(connect, 'helloooooooo')
    return (
      <View style={styles.container}>
        <Text> Home </Text>
      </View>
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


const mapStateToProps = state => {
  return {
    todos: state.todos.todos 
  }
}

export default Home
