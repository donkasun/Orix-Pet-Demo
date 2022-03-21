import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {Logo, Text, RoundedButton, TextField} from '../../../components';
import {Colors, Images} from '../../../constant';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.inputContainer}>
          <Text type="large-title">{'Hello :)'}</Text>
          <Text type="description" textColor="gray">
            Enter your details to continue
          </Text>
        </View>

        <TextField
          title="Name"
          value={this.state.name}
          icon="profile"
          onChange={name => this.setState({name})}
          placeholder="Enter your name here"
        />
        <TextField
          title="Email"
          value={this.state.email}
          icon="email"
          keyboard="email"
          onChange={email => this.setState({email})}
          placeholder="Enter your email here"
        />
        <TextField
          title="Password"
          value={this.state.password}
          icon="lock"
          secured
          onChange={password => this.setState({password})}
          placeholder="Enter your password here"
        />
        {this.buttons()}
      </View>
    );
  }

  buttons() {
    const {navigation} = this.props;
    return (
      <View style={styles.buttonContainer}>
        <View style={{marginVertical: 10}}>
          <RoundedButton title="Sign Up" />
        </View>
        <View style={styles.noAccountText}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            style={styles.loginTouch}
            onPress={() => navigation?.navigate('Login')}>
            <Text style={styles.loginText}>Log in</Text>
            <Image
              source={Images.icons.play}
              textColor="blue"
              style={styles.triangle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
  },

  // Logo
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
  },

  // Inputs
  inputContainer: {
    justifyContent: 'center',
    minHeight: 40,
  },

  // Inputs
  inputContainer: {
    justifyContent: 'center',
    minHeight: 40,
  },

  // Buttons
  buttonContainer: {
    marginVertical: 10,
  },
  noAccountText: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTouch: {
    marginVertical: 10,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: Colors.theme.blue,
    marginHorizontal: 2,
  },
  triangle: {
    height: 10,
    width: 10,
    tintColor: Colors.theme.blue,
  },
});

export default Signup;
