import { createStore, combineReducers,  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import todosReducer from './reducers/todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer
})

// let composeEnhancers = compose;

// if (__DEV__) {
//    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// }

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}

export default configureStore