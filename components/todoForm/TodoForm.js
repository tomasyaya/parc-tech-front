import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './style';
import todoService from '../../service/todoService'

class TodoForm extends Component {
  
  state = {
    title: '',
    body: '',
    emptyField: false,
    errMessage: 'Please fill all the fields'
  }

  handlePress = async () => {
    const { title, body } = this.state;
    if(!title || !body) {
      this.setState({ emptyField: true })
      return
    }
    const newTodo = { title, body }
    try {
      await todoService.createTodo(newTodo)
      this.setState({
        title: '',
        body: ''
      })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const { input } = styles;
    const { title, body, emptyField, errMessage } = this.state;
    const message = emptyField ? <Text> {errMessage} </Text> : null
    return (
      <View>
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


export default TodoForm
