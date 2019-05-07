import React from 'react';
import TodoCard from '../todoCard/TodoCard'; 
import { FlatList } from 'react-native';


const TodoList = props => {
  const { data } = props;
  return(
    <FlatList
      data={data}
      renderItem={( { item } ) => <TodoCard data={item} />}
    />
  )
}


export default TodoList