
import { GET_TODOS, SORT_TODOS } from './actionTypes';
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

export const sortAllTodos = () => (dispatch) => {
  dispatch({
    type: SORT_TODOS
  })
}


export const errMessage = (err) => (dispatch) => {
  dispatch({
    type: ERR_MSS,
    payload: err
  })  
}
