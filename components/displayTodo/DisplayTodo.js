import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { connect } from 'react-redux';
import TodoList from '../todoList/TodoList';

const DisplayTodo = (props) => {
  const { undone, done } = props;
  const { container, title } = styles;
  return(
    <View style={container}>
      <Text style={title}> Todo! </Text>
      <TodoList data={undone} />
      <Text style={title}> Done! </Text>
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
