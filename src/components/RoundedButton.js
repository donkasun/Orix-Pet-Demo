import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Configs} from '../constant';

function RoundedButton({children, title, onPress = () => {}}) {
  let style = {
    ...styles.button,
  };
  let textStyles = {
    ...styles.textDefault,
  };
  return (
    <TouchableOpacity onPress={onPress()}>
      <View style={style}>
        <Text style={textStyles}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: 15,
    backgroundColor: Colors.theme.blue,
    alignItems: 'center',
  },
  textDefault: {
    color: Colors.text.white,
    fontWeight: 'bold',
    fontSize: Configs.textSizes.button,
  },
});

export default RoundedButton;
