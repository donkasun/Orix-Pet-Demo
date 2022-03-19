import * as React from 'react';
import * as RN from 'react-native';

import {Colors, Configs} from '../constant';

function Text({children, type, style, textColor, bold}) {
  let textStyle = {...styles.mainStyle};

  switch (type) {
    case 'title':
      textStyle = {...textStyle, ...styles.title};
      break;
    case 'description':
      textStyle = {...textStyle, ...styles.description};
      break;
  }

  switch (textColor) {
    case 'gray':
      textStyle = {...textStyle, ...styles.gray};
      break;
    case 'orange':
      textStyle = {...textStyle, ...styles.orange};
      break;
    case 'blue':
      textStyle = {...textStyle, ...styles.orange};
      break;
  }

  if (bold) {
    textStyle = {...textStyle, fontWeight: 'bold'};
  }

  textStyle = {...textStyle, ...style};

  return <RN.Text style={textStyle}>{children}</RN.Text>;
}

const styles = RN.StyleSheet.create({
  mainStyle: {
    color: Colors.text.black,
  },
  title: {
    fontSize: Configs.textSizes.title,
    fontWeight: 'bold',
  },
  description: {
    fontSize: Configs.textSizes.description,
  },
  blue: {
    color: Colors.theme.blue,
  },
  gray: {
    color: Colors.text.gray,
  },
  orange: {
    color: Colors.theme.orange,
  },
});

export default Text;
