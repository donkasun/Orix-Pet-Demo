import * as React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors, Images} from '../constant';
import Text from './Text';

function TextField({icon, title, value, showEye, eyeHidden, secured}) {
  let image = Images.icons.lock;

  return (
    <View style={styles.mainContainer}>
      <View style={{width: 50, alignItems: 'center'}}>
        <Image source={image} style={styles.icon} />
      </View>
      <View
        style={{height: '70%', width: 1, backgroundColor: Colors.theme.gray}}
      />
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text>Title</Text>
        <Text>{isSecured()}</Text>
      </View>
      {showEye && (
        <TouchableOpacity
          style={{
            height: '100%',
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Image
            source={Images.icons.eye}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

function isSecured(text, secured) {
  if (!secured) {
    return text;
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 15,
    height: 50,
    borderColor: Colors.theme.gray,
    borderWidth: 1,
  },
  icon: {
    height: 25,
    width: 25,
  },
});

export default TextField;
