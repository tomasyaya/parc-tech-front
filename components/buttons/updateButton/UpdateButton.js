import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { sortAllTodos, getAllTodos } from '../../../store/actions/actions';
import todoService from '../../../service/todoService';


const UpdateButton = props => {
  const { id, sortAllTodos, getAllTodos, status } = props
  return(
    <TouchableOpacity onPress={async () => {
      try {
        await todoService.doneTodo(id)
        await getAllTodos()
        await sortAllTodos()
      } catch(err) {
        console.log(err)
      }
    }}>
      <Text>{status ? "Undone" : 'Done'}</Text>
    </TouchableOpacity>
  )
}


export default connect(null, { sortAllTodos, getAllTodos })(UpdateButton)