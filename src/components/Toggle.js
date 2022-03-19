import React, {useState} from 'react';
import {View} from 'react-native';
import {Switch} from 'react-native-switch';

import {Colors} from '../constant';
import Text from './Text';

function Toggle({children, title, value}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        activeText={''}
        inActiveText={''}
        circleSize={20}
        renderActiveText={false}
        renderInActiveText={false}
        backgroundActive={Colors.theme.yellow}
        backgroundInactive={Colors.theme.grey}
        switchBorderRadius={30}
      />
      <Text style={{marginLeft: 5}}>{title}</Text>
    </View>
  );
}

export default Toggle;
