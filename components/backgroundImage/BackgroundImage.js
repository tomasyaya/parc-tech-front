import React from 'react';
import { Image } from 'react-native';
import { styles } from './style';

const BackgroundImage = props => {
  const { src } = props;
  const { container } = styles;
  return(
    <Image style={container}>
      {props.children}
    </Image>
  )
}


export default BackgroundImage