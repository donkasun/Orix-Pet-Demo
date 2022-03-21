import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {Colors, Images} from '../constant';
import Text from './Text';

function TextField({icon, title, value, secured, keyboard}) {
  let image = Images.icons.play,
    keyboardType = 'default';

  const [showEye, setShowEye] = useState(false);

  switch (keyboard) {
    case 'email':
      keyboardType = 'email-address';
      break;
  }

  switch (icon) {
    case 'email':
      image = Images.icons.mail;
      break;
    case 'lock':
      image = Images.icons.lock;
      break;
    case 'profile':
      image = Images.icons.profile;
      break;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <Image source={image} style={styles.icon} />
      </View>
      <View style={styles.splitter} />
      <View style={styles.textContainer}>
        <Text textColor="gray" style={styles.title}>
          {title}
        </Text>
        <TextInput
          value={value}
          secureTextEntry={secured && !showEye}
          style={styles.textInput}
          keyboardType={keyboardType}
        />
      </View>
      {secured && (
        <TouchableOpacity
          style={styles.securedContainer}
          onPress={() => setShowEye(showEye => !showEye)}>
          <Image
            source={Images.icons.eye}
            style={styles.securedIcon(showEye)}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 15,
    height: 60,
    borderColor: Colors.theme.gray,
    borderWidth: 1,
  },
  iconContainer: {
    width: 50,
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  splitter: {
    height: '70%',
    width: 1,
    backgroundColor: Colors.theme.gray,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    marginVertical: 0,
    padding: 0,
  },
  textInput: {
    color: Colors.text.black,
    fontWeight: 'bold',
    padding: 0,
  },
  securedContainer: {
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  securedIcon: showEye => ({
    width: 20,
    height: 20,
    tintColor: showEye ? Colors.theme.yellow : Colors.theme.black,
  }),
});

export default TextField;
