import * as React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

function TextField() {
  return (
    <View style={styles.mainContainer}>
      <View style={{height: 10, width: 10, backgroundColor: 'red'}} />
      <View style={{height: 10, width: 10, backgroundColor: 'red'}} />
      <View style={{height: 10, width: 10, backgroundColor: 'red'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    marginVertical: 5,
    borderRadius: 15,
  },
});

export default TextField;
