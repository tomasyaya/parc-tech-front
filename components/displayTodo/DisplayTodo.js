import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { connect } from 'react-redux';
import TodoList from '../todoList/TodoList';

const DisplayTodo = (props) => {
  const { undone, done } = props;
  const { container } = styles;
  return(
    <View style={container}>
      <Text> Todo! </Text>
      <TodoList data={undone} />
      <Text> Done! </Text>
      <TodoList data={done} />
    </View>
  )
}

const mapStateToProps = state => {
  return {
    undone: state.todos.undone,
    done: state.todos.done
  }
}

export default connect(mapStateToProps, null)(DisplayTodo)
