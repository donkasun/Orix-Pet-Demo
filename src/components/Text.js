import * as React from 'react';
import * as RN from 'react-native';

import {Colors, Configs} from '../constant';

function Text({children, type, style}) {
  let textStyle = {...styles.mainStyle};

  switch (type) {
    case 'title':
      textStyle = {...textStyle, ...styles.title};
      break;
  }

  textStyle = {...textStyle, ...style};

  return <RN.Text style={textStyle}>{children}</RN.Text>;
}

const styles = RN.StyleSheet.create({
  mainStyle: {
    color: Colors.theme.black,
  },
  title: {
    fontSize: Configs.textSizes.title,
    fontWeight: 'bold',
  },
});

export default Text;
