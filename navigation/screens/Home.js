import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { getAllTodos, sortAllTodos, errMessage } from '../../store/actions/actions';
import TodoForm from '../../components/todoForm/TodoForm';
import DisplayTodos from '../../components/displayTodo/DisplayTodo';



class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  componentDidMount = () => {
    this.fillTodos()
  }

  fillTodos = async () => {
    const { getAllTodos, sortAllTodos, errMessage, navigation } = this.props;
    try {
      await getAllTodos()
      sortAllTodos()
    } catch(err) {
      errMessage(err)
      navigation.navigate('ErrScreen')
    }
  }
  
  render() {
    const { container } = styles
    return (
      <ImageBackground source={require('../../assets/typemachine.jpg')} style={container}>
        <TodoForm />
        <DisplayTodos />
      </ImageBackground>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
})


const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    done: state.todos.done 
  }
}

export default connect(mapStateToProps, { getAllTodos, sortAllTodos, errMessage })(Home)
