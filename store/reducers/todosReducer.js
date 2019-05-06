import { GET_TODOS, ADD_TODO } from '../actions/actionTypes';

const initialState = {
  todos: []
}

export default todosRedycer = (state = initialState, action) =>{
  switch(action.type){
    case GET_TODOS:
     return {
       ...state,
      todos: [...action.payload]
     }
     case ADD_TODO:
     return {
       ...state
     }
    default:
    return state;
  }
}