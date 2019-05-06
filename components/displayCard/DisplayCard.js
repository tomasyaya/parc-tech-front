import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const DisplayCard = props => {
  const { title, body } = props;
  const { container } = styles;
  return (
    <View style={container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  )
}

export default DisplayCard;