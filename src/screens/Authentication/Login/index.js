import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import {
  Logo,
  Text,
  Toggle,
  TextField,
  RoundedButton,
} from '../../../components';
import {Colors, Images} from '../../../constant';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberLogin: false,
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.inputContainer}>
          <Text type="large-title">Welcome!</Text>
          <Text type="description" textColor="gray">
            Enter your email and password
          </Text>
          <View style={{height: 20}} />
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Toggle title="Remember" />
            <TouchableOpacity>
              <Text textColor="orange">Forgot Password!</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.buttons()}
      </View>
    );
  }

  buttons() {
    const {navigation} = this.props;
    return (
      <View style={styles.buttonContainer}>
        <View style={{marginVertical: 10}}>
          <RoundedButton title="Log in" />
        </View>
        <View style={styles.noAccountText}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.signupTouch}
            onPress={() => navigation?.navigate('Signup')}>
            <Text style={styles.signupText}>Sign up</Text>
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
  signupTouch: {
    marginVertical: 10,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    color: Colors.theme.blue,
    marginHorizontal: 2,
  },
  triangle: {
    height: 10,
    width: 10,
    tintColor: Colors.theme.blue,
  },
});

export default LoginScreen;
