
import { GET_TODOS } from './actionTypes';
import todoService from '../../service/todoService';

export const getAllTodos =  () => async (dispatch) => {
  console.log('before')
  try {
    console.log('before')
    const todos = await todoService.getTodos()
    dispatch({
      type: GET_TODOS,
      payload: todos
    })
  } catch(error) {
    console.log(error)
  }
}

