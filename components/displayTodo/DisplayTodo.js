import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

const DisplayTodo = (props) => {
  console.log(props)
  return(
    <View>
      <FlatList />
      <Text>Display Todo!</Text>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    done: state.todos.done
  }
}

export default connect(mapStateToProps, null)(DisplayTodo)
