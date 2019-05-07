import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { sortAllTodos, getAllTodos } from '../../../store/actions/actions';
import todoService from '../../../service/todoService';
import { styles } from './style';


const UpdateButton = props => {
  const { id, sortAllTodos, getAllTodos, status } = props;
  const { textGreen, textBlue } = styles;
  const textColor = !status ? textGreen : textBlue;
  const innerText = !status ? "Done" : "Undone";
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
      <Text style={textColor}>{innerText}</Text>
    </TouchableOpacity>
  )
}


export default connect(null, { sortAllTodos, getAllTodos })(UpdateButton)