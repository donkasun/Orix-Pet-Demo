import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {Images} from '../constant';
import Text from './Text';

function Logo() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image source={Images.icons.logo} style={styles.logo} />
      </View>
      <Text type="title" style={{marginVertical: 5, fontSize: 30}}>
        Orix Pet
      </Text>
      <Text textColor="gray" style={{fontWeight: 'bold'}}>
        Community we all need
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: '10%',
    alignItems: 'center',
  },
  logoContainer: {
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 20,
  },
});

export default Logo;
