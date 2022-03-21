import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../../../components';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Signup</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Signup;
