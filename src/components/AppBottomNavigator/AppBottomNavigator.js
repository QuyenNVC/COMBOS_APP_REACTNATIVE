import {Center, HStack, Text, View} from 'native-base';
import React, {memo} from 'react';
import {TouchableRipple} from 'react-native-paper';

import LA_BAN from '../../../assets/svg/la_ban.svg';
import SCANNER from '../../../assets/svg/scanner.svg';
import COIN from '../../../assets/svg/coin.svg';
import {Pressable} from 'react-native';
import {FONT_FAMILY} from '../../utils/styles';

import styles from './AppBottomNavigator.styles';
import {useSelector} from 'react-redux';

const AppBottomNavigator = () => {
  const {show} = useSelector(a => a.BottomNavigationReducer);
  return show ? (
    <View
      style={{
        height: 70,
        backgroundColor: '#fff',
      }}>
      <HStack justifyContent="space-around" paddingY={2}>
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          rippleColor="rgba(0,0,0,0.05)"
          borderless={true}
          style={styles.touchableRipple}>
          <Center marginTop={-3}>
            <LA_BAN style={styles.touchableIcon} />
            <Text color="rgba(7, 106, 208, 1)" fontFamily={FONT_FAMILY} bold>
              Khám phá
            </Text>
          </Center>
        </TouchableRipple>
        <Pressable
          onPress={() => console.log('Pressed')}
          style={styles.pressableCenter}>
          <Center marginTop={-3}>
            <SCANNER style={styles.pressableIcon} />
            <Text color="rgba(7, 106, 208, 1)" fontFamily={FONT_FAMILY} bold>
              Truy cập nhanh
            </Text>
          </Center>
        </Pressable>
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          rippleColor="rgba(0,0,0,0.05)"
          borderless={true}
          style={styles.touchableRipple}>
          <Center marginTop={-3}>
            <COIN style={styles.touchableIcon} />
            <Text color="rgba(7, 106, 208, 1)" fontFamily={FONT_FAMILY} bold>
              Giao dịch
            </Text>
          </Center>
        </TouchableRipple>
      </HStack>
    </View>
  ) : (
    <></>
  );
};

export default AppBottomNavigator;
