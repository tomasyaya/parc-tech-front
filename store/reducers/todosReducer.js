import { GET_TODOS, SORT_TODOS } from '../actions/actionTypes';

const initialState = {
  todos: [],
  done: [],
  undone: []
}

export default todosRedycer = (state = initialState, action) =>{
  switch(action.type){
    case GET_TODOS:
     return {
       ...state,
      todos: [...action.payload],
     }
    case SORT_TODOS:
      return {
        ...state,
        undone: [...state.todos].filter(todo => todo.done === false),
        done: [...state.todos].filter(todo => todo.done === true)
      }
    default:
    return state;
  }
}