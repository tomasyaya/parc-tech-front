import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getAllTodos, sortAllTodos } from '../../store/actions/actions';
import TodoForm from '../../components/todoForm/TodoForm';
import todoService from '../../service/todoService';
import DisplayTodos from '../../components/displayTodo/DisplayTodo';


class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  componentDidMount = () => {
    this.fillTodos()
  }

  fillTodos = async () => {
    const { getAllTodos, sortAllTodos } = this.props;
    try {
      await getAllTodos()
      sortAllTodos()
    } catch(err) {
      console.log(err)
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TodoForm />
        <DisplayTodos />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})


const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    done: state.todos.done 
  }
}

export default connect(mapStateToProps, { getAllTodos, sortAllTodos })(Home)
