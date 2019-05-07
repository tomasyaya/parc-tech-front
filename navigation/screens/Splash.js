import React, { Component } from 'react';
import { Text, StyleSheet, Button, ImageBackground, Animated, View } from 'react-native';



class Splash extends Component {
  static navigationOptions = {
      header: null
  }

  state = {
    anime: new Animated.ValueXY(0,0)
  }

  componentDidMount = () => {
    const { anime } = this.state;
    Animated.spring(anime, {
        toValue:{x:10,y:100}
    }).start();
  }
  
  render() {
    const { navigation } = this.props;
    const { title, text, backImg, container } = styles;
    const { anime } = this.state;
    return (
      <ImageBackground source={require('../../assets/paper.jpg')} style={backImg}>
        <Animated.View
          style={{
            left: anime.x,
            top: anime.y
          }}
        >
          <View style={container}>
            <Text style={title}> Hi there! </Text>
            <Text style={text}> This is a TO-DO generator, compleate all fields and add you to do!. If done, just mark it, confuse the to-do? erase it!</Text>
            <Button
              title="Start"
              onPress={() => {navigation.navigate('Home')}}
            />
          </View>
        </Animated.View>
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
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Splash
