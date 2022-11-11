import React, {memo, useCallback} from 'react';
import {ImageBackground, ScrollView, Pressable, View} from 'react-native';
import {Box, HStack, VStack, Center, Text, Image} from 'native-base';
import {TouchableRipple} from 'react-native-paper';
import images from '@assets/assets';

import styles from './Home.styles';

import HOTEL from '../../../assets/svg/hotel.svg';
import MONEY from '../../../assets/svg/money.svg';
import LUGGAGE from '../../../assets/svg/luggage.svg';
import CALENDAR from '../../../assets/svg/calendar.svg';
import HISTORY from '../../../assets/svg/history.svg';
import BELL from '../../../assets/svg/bell.svg';
import USER from '../../../assets/svg/user.svg';

import {
  COLOR_PRIMARY,
  DEVICE_WIDTH,
  FONT_FAMILY,
  TEXT_COLOR_PRIMARY,
} from '../../utils/styles';
import {infoNavigator} from './Home.navigators';
import {CarouselComponent} from './Home.components';
import {useDispatch} from 'react-redux';
import {BottomNavigationSlice} from '../../redux/reducers/BottomNavigationReducer';
import {useFocusEffect} from '@react-navigation/native';

export default memo(function ({navigation}) {
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(BottomNavigationSlice.actions.change(true));
    }, []),
  );
  const width = DEVICE_WIDTH;
  const dataBanner1 = [
    {
      src: images.banner11,
      navigateTo: '',
    },
    {
      src: images.banner11,
      navigateTo: '',
    },
    {
      src: images.banner11,
      navigateTo: '',
    },
  ];

  const dataBanner2 = [
    {
      src: images.banner21,
      navigateTo: '',
    },
    {
      src: images.banner21,
      navigateTo: '',
    },
    {
      src: images.banner21,
      navigateTo: '',
    },
  ];

  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={images.banner}
        style={styles.banner}
        imageStyle={{
          resizeMode: 'cover',
          alignSelf: 'center',
        }}>
        <HStack style={styles.headerTitleWrapper}>
          <Text color="#fff" fontFamily={FONT_FAMILY} bold fontSize="20">
            combos.com.vn
          </Text>
          <HStack space={2}>
            <Pressable>
              <BELL style={styles.bellIcon} />
            </Pressable>
            <View style={styles.buttonProfile}>
              <TouchableRipple
                style={styles.buttonProfileRipple}
                borderless={true}
                rippleColor="rgba(204, 237, 252, 1)"
                onPress={() => {
                  console.log('Profile');
                }}>
                <USER style={styles.buttonProfileIcon} />
              </TouchableRipple>
            </View>
          </HStack>
        </HStack>
      </ImageBackground>
      <VStack
        justifyContent="space-between"
        space={3}
        paddingX={15}
        marginTop={-30}>
        <HStack justifyContent="space-between" space={3}>
          <TouchableRipple
            onPress={() =>
              navigation.navigate('Service', {
                categoryId: 1,
              })
            }
            rippleColor={COLOR_PRIMARY}
            style={styles.product}>
            <>
              <HOTEL style={styles.productIcon} />
              <Text style={styles.productLabel}>Khách sạn</Text>
            </>
          </TouchableRipple>
          <TouchableRipple
            onPress={() =>
              navigation.navigate('Service', {
                categoryId: 1,
              })
            }
            rippleColor={COLOR_PRIMARY}
            style={[
              styles.product,
              {
                backgroundColor: 'rgba(7, 106, 208, 1)',
              },
            ]}>
            <>
              <MONEY style={styles.productIcon} />
              <Text style={styles.productLabel}>Combo</Text>
            </>
          </TouchableRipple>
        </HStack>
        <HStack justifyContent="space-between" space={3}>
          <TouchableRipple
            onPress={() =>
              navigation.navigate('Service', {
                categoryId: 1,
              })
            }
            rippleColor={COLOR_PRIMARY}
            style={[
              styles.product,
              {
                backgroundColor: 'rgba(7, 106, 208, 1)',
              },
            ]}>
            <>
              <LUGGAGE style={styles.productIcon} />
              <Text style={styles.productLabel}>Du lịch</Text>
            </>
          </TouchableRipple>
          <TouchableRipple
            onPress={() =>
              navigation.navigate('Service', {
                categoryId: 1,
              })
            }
            rippleColor={COLOR_PRIMARY}
            style={styles.product}>
            <>
              <CALENDAR style={styles.productIcon} />
              <Text style={styles.productLabel}>Tổng hợp</Text>
            </>
          </TouchableRipple>
        </HStack>
      </VStack>
      <HStack paddingX={15} marginTop={25} justifyContent="space-between">
        {infoNavigator.map((item, index) => {
          return (
            <VStack
              key={index}
              space={2}
              onTouchStart={() => {
                console.log(1);
              }}>
              <TouchableRipple
                rippleColor="rgba(204, 237, 252, 1)"
                borderless={true}
                onPress={() => console.log('Pressed')}
                style={styles.infoIconWrapper}>
                <item.icon style={styles.infoIcon} />
              </TouchableRipple>
              <Text style={styles.infoLabel}>{item.label}</Text>
            </VStack>
          );
        })}
      </HStack>
      <CarouselComponent
        data={dataBanner1}
        width={width}
        height={((width - 30) * 2) / 5}
        duration={1000}
      />
      <CarouselComponent
        data={dataBanner2}
        width={width}
        height={((width - 30) * 4) / 5}
        duration={2000}
      />
      <Box
        marginTop={3}
        style={{
          paddingBottom: 70,
        }}>
        <Text
          bold
          color="rgba(214, 54, 42, 1)"
          fontSize={28}
          lineHeight={31}
          fontFamily={FONT_FAMILY}
          marginBottom={1}
          marginLeft={15}>
          Chương trình khuyến mãi
        </Text>
        <Text
          fontWeight={'500'}
          color={TEXT_COLOR_PRIMARY}
          fontSize={16}
          lineHeight={18}
          fontFamily={FONT_FAMILY}
          marginBottom={5}
          marginLeft={15}>
          Đừng bỏ lỡ những chương trình khuyến mãi
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{
            marginRight: 15,
          }}>
          {[1, 2, 3].map((item, index) => {
            return (
              <Pressable style={styles.saleItem} key={index}>
                <Image
                  source={images.sale}
                  height={100}
                  width={100}
                  alt="..."
                />
                <VStack flexShrink={1} marginLeft={4}>
                  <Text
                    fontFamily={FONT_FAMILY}
                    color="#000"
                    fontSize={17}
                    bold>
                    Giảm giá tháng 8 50%
                  </Text>
                  <Text fontFamily={FONT_FAMILY} color="#000" fontSize={10}>
                    Chương trình khuyến mãi Giảm giá tháng 8 50%
                  </Text>
                  <HStack space={2} alignItems="center">
                    <HISTORY
                      style={{
                        maxWidth: 10,
                        maxHeight: 10,
                      }}
                    />
                    <Text
                      fontFamily={FONT_FAMILY}
                      color="rgba(58, 172, 25, 1)"
                      fontSize={10}>
                      Còn 12 ngày
                    </Text>
                  </HStack>
                </VStack>
              </Pressable>
            );
          })}
        </ScrollView>
        <Center>
          <TouchableRipple
            style={styles.saleButton}
            borderless={true}
            rippleColor="rgba(0,0,0,0.05)"
            onPress={() => {
              console.log(1);
            }}>
            <Text
              color="#000"
              fontWeight="700"
              fontFamily={FONT_FAMILY}
              fontSize={14}
              textAlign="center">
              Xem tất cả (3)
            </Text>
          </TouchableRipple>
        </Center>
      </Box>
    </ScrollView>
  );
});
