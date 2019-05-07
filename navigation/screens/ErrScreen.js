import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const ErrScreen = props => {
  const { message } = props
  const { container } = styles
  return(
    <View style={container}>
      <Text>There has been a problem, try again!</Text>
      <Text>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
})

const mapStateToProps = state => {
  return {
    message: state.todos.message
  }
}

export default connect(mapStateToProps, null)(ErrScreen)