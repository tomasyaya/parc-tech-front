import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './style';
import todoService from '../../service/todoService'
import { connect } from 'react-redux';
import { getAllTodos, sortAllTodos } from '../../store/actions/actions';

class TodoForm extends Component {
  
  state = {
    title: '',
    body: '',
    emptyField: false,
    errMessage: 'Please fill all the fields'
  }

  handlePress = async () => {
    const { title, body } = this.state;
    const { getAllTodos, sortAllTodos } = this.props;
    if(!title || !body) {
      this.setState({ emptyField: true })
      return
    }
    const newTodo = { title, body, done: false }
    try {
      await todoService.createTodo(newTodo)
      this.setState({
        title: '',
        body: ''
      })
      await getAllTodos()
      await sortAllTodos()
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const { input,container } = styles;
    const { title, body, emptyField, errMessage } = this.state;
    const message = emptyField ? <Text> {errMessage} </Text> : null
    return (
      <View style={container}>
        <Text> Add Todo </Text>
        {message}
        <TextInput
          style={input}
          value={title}
          placeholder="title"
          onChangeText={val => this.setState({title: val, emptyField: false})}
        />
        <TextInput
          style={input}
          value={body}
          placeholder="message"
          onChangeText={val => this.setState({body: val, emptyField: false})}
        />
        <Button
          title="Add"
          onPress={this.handlePress}
        />
      </View>
    );
  }
}


export default connect(null, { getAllTodos, sortAllTodos } )(TodoForm)
