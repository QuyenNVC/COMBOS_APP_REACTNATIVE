import {useFocusEffect, useRoute} from '@react-navigation/native';
import {Box, HStack, ScrollView, Text, VStack} from 'native-base';
import React, {memo, useCallback} from 'react';
import {Image, ImageBackground, Pressable, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {BottomNavigationSlice} from '../../redux/reducers/BottomNavigationReducer';
import {
  BORDER_COLOR_PRIMARY,
  COLOR_PRIMARY,
  DEVICE_WIDTH,
  FONT_FAMILY,
} from '../../utils/styles';

import styles from './Detail.styles';
import assets from '@assets/assets';
import ARROW_LEFT from '../../../assets/svg/arrow_left.svg';
import ARROW_RIGHT from '../../../assets/svg/arrow_right.svg';
import HEART_OUTLINE from '../../../assets/svg/heart_outline.svg';
import HEART_SOLID from '../../../assets/svg/heart_solid.svg';
import LIKE from '../../../assets/svg/like.svg';
import SHIELD from '../../../assets/svg/shield.svg';
import PEOPLE from '../../../assets/svg/people.svg';
import AEROSOL from '../../../assets/svg/aerosol.svg';
import LID from '../../../assets/svg/lid.svg';
import BUILDING from '../../../assets/svg/building.svg';
import WIFI from '../../../assets/svg/wifi.svg';
import PASSENGER from '../../../assets/svg/passenger.svg';
import NO_SMOKING from '../../../assets/svg/no_smoking.svg';
import FAMILY from '../../../assets/svg/family.svg';
import SHARE from '../../../assets/svg/share.svg';
import PLANE from '../../../assets/svg/plane.svg';
import MALL from '../../../assets/svg/mall.svg';

import {TouchableRipple} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import {Rating} from 'react-native-ratings';
import {
  HealthInfomation,
  RoomInfmation,
  LocationInfomation,
  UtilitiesInfomation,
} from './Detail.components';

const Detail = memo(({navigation}) => {
  const dispatch = useDispatch();
  const route = useRoute();

  const {serviceId} = route.params;

  const width = DEVICE_WIDTH;
  const height = (width * 31) / 49;

  const images = [
    'https://picsum.photos/id/111/200/300',
    'https://picsum.photos/id/112/200/300',
    'https://picsum.photos/id/113/200/300',
    'https://picsum.photos/id/114/200/300',
    'https://picsum.photos/id/115/200/300',
  ];

  useFocusEffect(
    useCallback(() => {
      dispatch(BottomNavigationSlice.actions.change(false));
    }, []),
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box
        style={{
          padding: 15,
          backgroundColor: COLOR_PRIMARY,
        }}>
        {/* HEADER */}
        <Box
          width={'100%'}
          borderColor={BORDER_COLOR_PRIMARY}
          borderWidth={1}
          backgroundColor="#fff">
          <HStack
            justifyContent="space-between"
            paddingY="0.5"
            paddingX={2}
            space="3">
            <HStack>
              <TouchableRipple
                rippleColor="rgba(0,0,0,0.05)"
                borderless={true}
                style={styles.goBackBtn}
                onPress={() => navigation.goBack()}>
                <ARROW_LEFT style={styles.goBackIcon} />
              </TouchableRipple>
              <VStack justifyContent="space-between">
                <Text bold fontFamily={FONT_FAMILY} fontSize="12">
                  Khách sạn A&EM Phan Bội Châu
                </Text>
                <Text bold fontFamily={FONT_FAMILY} fontSize="12">
                  19 tháng 9 - 20 tháng 9
                </Text>
              </VStack>
            </HStack>
            <Pressable
              style={{
                justifyContent: 'center',
                paddingHorizontal: 5,
              }}>
              <HEART_SOLID
                style={{
                  maxWidth: 25,
                  maxHeight: 25,
                }}
              />
            </Pressable>
          </HStack>
        </Box>

        {/* GALLERY */}
        {/* <GestureHandlerRootView> */}
        <Carousel
          loop
          width={width - 30}
          height={height}
          autoPlay={true}
          data={images}
          scrollAnimationDuration="2000"
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={({item, index}) => (
            <Image
              source={{uri: item}}
              style={{
                width: width - 30,
                borderRadius: 20,
                overflow: 'hidden',
                height,
              }}
              resizeMode="stretch"
              key={index}
            />
          )}
        />
        {/* </GestureHandlerRootView> */}

        {/* INFOMATION */}
        <HStack
          justifyContent="space-between"
          paddingBottom="6"
          borderBottomColor={BORDER_COLOR_PRIMARY}
          borderBottomWidth="1">
          <VStack space="1.5">
            <Text bold fontFamily={FONT_FAMILY} fontSize="20">
              A&EM Phan Boi Chau
            </Text>
            <HStack alignItems="center" maxWidth="100%">
              <Rating
                ratingCount={5}
                imageSize={20}
                readonly={true}
                ratingColor="#f39f00"
                startingValue={5}
                type="custom"
                tintColor={COLOR_PRIMARY}
              />
              <LIKE style={styles.likeIcon} />
            </HStack>
          </VStack>
          <View style={styles.assessLabel}>
            <Text color="#fff" fontSize="16" fontFamily={FONT_FAMILY}>
              8.5
            </Text>
          </View>
        </HStack>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          paddingY="4"
          borderBottomColor={BORDER_COLOR_PRIMARY}
          borderBottomWidth="1">
          <VStack space={1.5}>
            <View
              style={[
                styles.assessLabel,
                {
                  backgroundColor: 'rgba(35, 144, 17, 1)',
                },
              ]}>
              <Text color="#fff" fontSize="16" fontFamily={FONT_FAMILY}>
                Ưu Đãi Trong Thời Gian Có Hạn
              </Text>
            </View>
            <Text fontFamily={FONT_FAMILY} fontSize="13">
              Giá cho 1 đêm, 2 người lớn
            </Text>
            <HStack space="5" alignItems="center">
              <Text
                textDecorationLine="line-through"
                color="rgba(184, 30, 32, 1)"
                fontFamily={FONT_FAMILY}
                fontSize="16">
                VND {(1500000).toLocaleString('en-GB')}
              </Text>
              <Text color="#000" fontFamily={FONT_FAMILY} fontSize="24" bold>
                VND {(720000).toLocaleString('en-GB')}
              </Text>
            </HStack>
            <Text
              fontFamily={FONT_FAMILY}
              fontSize="13"
              color="rgba(120, 120, 120, 1)">
              Đã bao gồm thuế và phí
            </Text>
          </VStack>
          <TouchableRipple
            rippleColor="rgba(0,0,0,0.05)"
            borderless={true}
            style={{
              width: 35,
              height: 35,
              padding: 5,
              borderRadius: 18,
            }}
            onPress={() => console.log(1)}>
            <ARROW_RIGHT
              style={{
                maxWidth: 25,
                maxHeight: 25,
              }}
            />
          </TouchableRipple>
        </HStack>
        <VStack paddingY="4" space={2}>
          <HStack justifyContent="space-between" space="1.5">
            <RoomInfmation
              label="Nhận phòng"
              text="T2 Ngày 19 Tháng 9 Năm 2022"
            />
            <RoomInfmation
              label="Trả phòng"
              text="T3 Ngày 20 Tháng 9 Năm 2022"
            />
          </HStack>
          <RoomInfmation
            label="Số lượng phòng và khách"
            text="1 phòng, 2 người lớn, 0 trẻ em"
          />
        </VStack>
      </Box>

      {/* NHÚNG LINK GOOGLE MAP */}
      <Box>
        <ImageBackground
          source={assets.googleMap}
          style={{
            height: 180,
          }}
          imageStyle={{
            resizeMode: 'cover',
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 15,
            backgroundColor: COLOR_PRIMARY,
          }}>
          <Text fontFamily={FONT_FAMILY} fontSize="14">
            44-46 Phan Bội Châu, Ben Thanh Ward, Quận 1, TP. Hồ Chí Minh, Việt
            Nam - 0,2 km từ trung tâm.
          </Text>
        </View>
      </Box>
      <Box
        style={{
          padding: 20,
          backgroundColor: '#fff',
        }}>
        <Text bold fontFamily={FONT_FAMILY} fontSize="18">
          Miêu tả
        </Text>
        <Text fontFamily={FONT_FAMILY} fontSize="14">
          Ngay trung tâm TP. Hồ Chí Minh
        </Text>
        <Text fontFamily={FONT_FAMILY} fontSize="14">
          Chỗ nghỉ này tọa lại tại trung tâm Thành phố Hồ Chí Minh, đối diện với
          Chợ Bến Thành.
        </Text>
        <Text fontFamily={FONT_FAMILY} fontSize="14">
          Chỗ nghỉ cung cấp dịch vụ mát-xa và phòng tắm xông hơi..
        </Text>
        <Pressable>
          <Text
            bold
            fontFamily={FONT_FAMILY}
            fontSize="18"
            color="rgba(7, 106, 208, 1)"
            marginTop={3}>
            Đọc miêu tả đầy đủ
          </Text>
        </Pressable>
      </Box>

      {/* VỆ SINH VÀ SỨC KHỎE */}
      <Box style={styles.boxWrapper}>
        <Text bold fontFamily={FONT_FAMILY} fontSize="18">
          Vệ sinh & sức khỏe
        </Text>
        <Text
          fontFamily={FONT_FAMILY}
          fontSize="14"
          marginTop={1.5}
          color="rgba(7, 106, 208, 1)">
          Độ sạch sẽ được đánh giá 7.5
        </Text>
        <VStack marginTop={4} space={2}>
          <HealthInfomation
            label="Các biện pháp an toàn"
            number={4}
            icon={SHIELD}
          />
          <HealthInfomation label="Giãn cách xã hội" number={1} icon={PEOPLE} />
          <HealthInfomation
            label="Lau dọn khử trùng"
            number={5}
            icon={AEROSOL}
          />
          <HealthInfomation
            label="An toàn vệ sinh thực phẩm"
            number={3}
            icon={LID}
          />
        </VStack>
        <Pressable>
          <Text
            bold
            fontFamily={FONT_FAMILY}
            fontSize="18"
            color="rgba(7, 106, 208, 1)"
            marginTop={3}>
            Xem thêm về vệ sinh và sức khỏe
          </Text>
        </Pressable>
      </Box>

      {/* TIỆN ÍCH */}
      <Box style={styles.boxWrapper}>
        <Text bold fontFamily={FONT_FAMILY} fontSize="18">
          Những tiện nghi phổ biến nhất
        </Text>

        <HStack flexWrap="wrap" space={2}>
          <UtilitiesInfomation icon={WIFI} utilities="Wifi miễn phí" />
          <UtilitiesInfomation
            icon={PASSENGER}
            utilities="Xe đưa đón sân bay"
          />
          <UtilitiesInfomation
            icon={NO_SMOKING}
            utilities="Phòng không hút thuốc"
          />
          <UtilitiesInfomation icon={FAMILY} utilities="Phòng gia đình" />
        </HStack>

        <VStack space={2} marginTop={4}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text bold fontFamily={FONT_FAMILY} fontSize="18">
              Các địa điểm được tham quan gần đó*
            </Text>
            <BUILDING style={styles.normalIcon} />
          </HStack>
          <LocationInfomation
            label="Ben Thanh Street Food Market"
            distance={100}
          />
          <LocationInfomation label="Chợ Bến Thành" distance={100} />
          <LocationInfomation
            label="General Science Library Ho Chi Minh City"
            distance={200}
          />
          <LocationInfomation
            label="Trung tâm thương mại Saigon Square 1 - Nam Kỳ Khởi Nghĩa"
            distance={200}
          />
          <LocationInfomation
            label="Trung tâm mua sắm Takashimaya Việt Nam"
            distance={200}
          />
          <LocationInfomation
            label="Bảo tàng Thành phố Hồ Chí Minh"
            distance={300}
          />
          <LocationInfomation label="Bảo tàng Mỹ thuật" distance={350} />
          <LocationInfomation label="Hồ Chí Minh City Hall" distance={450} />
          <LocationInfomation
            label="Trung tâm thương mại Vincom Center A"
            distance={450}
          />
          <LocationInfomation label="Dinh thống Nhất" distance={500} />
        </VStack>
      </Box>

      {/* THÔNG TIN ĐI LẠI */}
      <Box style={styles.boxWrapper}>
        <Box
          style={{
            paddingBottom: 25,
            borderBottomColor: BORDER_COLOR_PRIMARY,
            borderBottomWidth: 1,
          }}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text bold fontFamily={FONT_FAMILY} fontSize="18">
              Thông tin đi lại*
            </Text>
            <PLANE style={styles.normalIcon} />
          </HStack>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            space="5"
            marginTop={2}>
            <VStack space={1} flexShrink={1}>
              <Text fontFamily={FONT_FAMILY} fontSize="14">
                Chỉ dẫn đường đi từ Sân bay Quốc tế Tân Sơn Nhất
              </Text>
              <Text fontFamily={FONT_FAMILY} fontSize="14">
                Taxi
              </Text>
              <Text fontFamily={FONT_FAMILY} fontSize="14">
                Xe đưa đón đến sân bay
              </Text>
            </VStack>
            <Text fontFamily={FONT_FAMILY} fontSize="14">
              25 phút
            </Text>
          </HStack>
        </Box>
        <Box
          style={{
            paddingVertical: 15,
            borderBottomColor: BORDER_COLOR_PRIMARY,
            borderBottomWidth: 1,
          }}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text bold fontFamily={FONT_FAMILY} fontSize="18">
              Xung quanh chỗ nghỉ*
            </Text>
            <MALL
              style={{
                maxWidth: 35,
                maxHeight: 35,
              }}
            />
          </HStack>
          <HStack justifyContent="space-between" space="5" marginTop={2}>
            <VStack space={1} flexShrink={1}>
              <Text fontFamily={FONT_FAMILY} fontSize="14">
                Nhà hàng
              </Text>
              <Text fontFamily={FONT_FAMILY} fontSize="14">
                Buzza Pizza
              </Text>
            </VStack>
            <Text fontFamily={FONT_FAMILY} fontSize="14">
              200 m
            </Text>
          </HStack>
        </Box>
        <Box
          style={{
            paddingTop: 15,
          }}>
          <Text fontFamily={FONT_FAMILY} fontSize="15">
            * Tất cả khoảng cách được đo theo đường thẳng. Khoảng cách di chuyển
            thực sự có thể khác.
          </Text>
        </Box>
      </Box>

      {/* CHIA SẼ LIÊN KẾT */}
      <VStack style={styles.boxWrapper} space={4}>
        <TouchableRipple
          style={{
            paddingHorizontal: 15,
            paddingVertical: 19,
            borderColor: 'rgba(7, 106, 208, 1)',
            backgroundColor: '#fff',
            borderWidth: 2,
          }}
          onPress={() => console.log('Share')}
          rippleColor="rgba(7, 106, 208, 1)">
          <HStack justifyContent="space-around" alignItems="center" space="2">
            <SHARE style={styles.normalIcon} />
            <Text
              bold
              fontFamily={FONT_FAMILY}
              fontSize="18"
              color="rgba(7, 106, 208, 1)"
              flexShrink={1}>
              Chia sẻ đường dẫn trang chỗ nghỉ
            </Text>
          </HStack>
        </TouchableRipple>
        <TouchableRipple
          style={{
            paddingHorizontal: 15,
            paddingVertical: 19,
            borderColor: 'rgba(7, 106, 208, 1)',
            backgroundColor: '#fff',
            borderWidth: 2,
          }}
          onPress={() => console.log('Share')}
          rippleColor="rgba(7, 106, 208, 1)">
          <HStack justifyContent="space-around" alignItems="center" space="2">
            <SHARE style={styles.normalIcon} />
            <Text
              bold
              fontFamily={FONT_FAMILY}
              fontSize="18"
              color="rgba(7, 106, 208, 1)"
              flexShrink={1}>
              Chia sẻ đường dẫn cho chính mình
            </Text>
          </HStack>
        </TouchableRipple>
      </VStack>
      <TouchableRipple
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(7, 106, 208, 1)',
          height: 80,
        }}
        onPress={() => console.log('Chọn phòng')}
        rippleColor="rgba(50, 150, 240, 1)">
        <Text bold color="#fff" fontFamily={FONT_FAMILY} fontSize="24">
          Chọn phòng
        </Text>
      </TouchableRipple>
    </ScrollView>
  );
});

export default Detail;
