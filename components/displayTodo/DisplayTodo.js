import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import DisplayCard from '../displayCard/DisplayCard';

const DisplayTodo = (props) => {
  const { todos, done } = props;
  return(
    <View>
      <Text> Todo! </Text>
      <FlatList
        data={todos}
        renderItem={( { item: { title, body } } ) => <DisplayCard title={title} body={body} />}
      />
      <Text> Done! </Text>
      <FlatList
        data={done}
        renderItem={( { item: { title, body } } ) => <DisplayCard title={title} body={body} />}
      />
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
