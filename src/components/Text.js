import * as React from 'react';
import * as RN from 'react-native';

function Text({children}) {
  console.log('children', children);
  let style = styles.mainStyle;
  return <RN.Text style={style}>{children}</RN.Text>;
}

const styles = RN.StyleSheet.create({
  mainStyle: {color: 'red'},
});

export default Text;
