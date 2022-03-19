import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../../components';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <View>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default LoginScreen;
