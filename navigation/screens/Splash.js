import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage';


class Splash extends Component {
  static navigationOptions = {
      header: null
  }
  
  render() {
    const { navigation } = this.props;
    const { title, text, backImg } = styles;
    return (
      <ImageBackground source={require('../../assets/paper.jpg')} style={backImg}>
        <Text style={title}> Hi there! </Text>
        <Text style={text}> This is a TO-DO generator, compleate all fields and add you to do!. If done, just mark it, confuse the to-do? erase it!</Text>
        <Button
          title="Start"
          onPress={() => {navigation.navigate('Home')}}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 30,
    opacity: 0.8
  },
  text: {
    textAlign: 'center',
    width: 200,
    marginBottom: 20,
  },
  backImg: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Splash
