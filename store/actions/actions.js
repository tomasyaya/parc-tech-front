
import { GET_TODOS } from './actionTypes';
import todoService from '../../service/todoService';

export const getAllTodos =  () => async (dispatch) => {
  try {
    const todos = await todoService.getTodos()
    dispatch({
      type: GET_TODOS,
      payload: todos
    })
  } catch(error) {
    console.log(error)
  }
}

