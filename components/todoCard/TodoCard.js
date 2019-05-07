import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import DeleteButton from '../buttons/deleteButton/DeleteButton';
import UpdateButton from '../buttons/updateButton/UpdateButton';

const DisplayCard = props => {
  const { data: { title, body, _id, done } } = props;
  const { container } = styles;
  
  return (
    <View style={container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <UpdateButton id={_id} status={done} />
      <DeleteButton id={_id}/>
    </View>
  )
}

export default DisplayCard;