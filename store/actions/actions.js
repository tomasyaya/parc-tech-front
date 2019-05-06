
import { GET_TODOS } from './actionTypes';

export const getTodos = () => dispatch => {
  dispatch({
    type: GET_TODOS,
    payload: "todos"
  })
}