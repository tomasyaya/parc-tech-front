import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import DeleteButton from '../buttons/deleteButton/DeleteButton';
import UpdateButton from '../buttons/updateButton/UpdateButton';

const DisplayCard = props => {
  const { data: { title, body, _id, done } } = props;
  const { container, btnView, textTitle } = styles;
  const iconType = !done ? "ios-mail" : "ios-mail-open"
  const iconColor = !done ? "#88BCFA" : "#5FAE72";
  return (
    <View style={container}>
      <Ionicons name={iconType} size={32} color={iconColor} />
      <View>
        <Text style={textTitle}>{title}</Text>
        <Text>{body}</Text>
      </View>
      <View style={btnView}>
        <DeleteButton id={_id}/>
        <UpdateButton id={_id} status={done} />
      </View>
    </View>
  )
}

export default DisplayCard;