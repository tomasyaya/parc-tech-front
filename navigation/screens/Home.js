import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getAllTodos } from '../../store/actions/actions';
import TodoForm from '../../components/todoForm/TodoForm';
import todoService from '../../service/todoService';


class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  componentDidMount = async () => {
    await this.props.getAllTodos()
  }
  
  render() {
    console.log(this.props.todos)
    return (
      <View style={styles.container}>
        <TodoForm />
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

export default connect(mapStateToProps, { getAllTodos })(Home)
