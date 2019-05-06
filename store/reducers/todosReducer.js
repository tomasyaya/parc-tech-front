import { GET_TODOS } from '../actions/actionTypes';

const initialState = {
  todos: 'hellooooooooo'
}

export default todosRedycer = (state = initialState, action) =>{
  switch(action.type){
    case GET_TODOS:
     return {
       ...state,
      todos: action.payload
     }
    default:
    return state;
  }
}