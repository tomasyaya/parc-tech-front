import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { getAllTodos, sortAllTodos } from '../../../store/actions/actions';
import todoService from '../../../service/todoService';


const DeleteButton = props => {
  const { id, getAllTodos, sortAllTodos } = props
  return(
    <TouchableOpacity onPress={async () => {
      try {
        await todoService.deleteTodo(id)
        await getAllTodos()
        await sortAllTodos()
      } catch(err) {
        console.log(err)
      }
    }}>
      <Text>X</Text>
    </TouchableOpacity>
  )
}


export default connect(null, { getAllTodos, sortAllTodos })(DeleteButton)