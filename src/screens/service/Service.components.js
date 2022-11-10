import {memo} from 'react';
import {Box, HStack, Text} from 'native-base';
import {View, Pressable, ImageBackground} from 'react-native';

import styles from './Service.styles';
import HEART_OUTLINE from '../../../assets/svg/heart_outline.svg';
import HEART_SOLID from '../../../assets/svg/heart_solid.svg';
import LIKE from '../../../assets/svg/like.svg';
import LOCATION from '../../../assets/svg/location.svg';
import LEAF from '../../../assets/svg/leaf.svg';
import LEAF_SKEW from '../../../assets/svg/leaf_skew.svg';

import {FONT_FAMILY} from '../../utils/styles';
import {Rating} from 'react-native-ratings';
import {useMemo} from 'react';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export const ServiceItem = memo(({item}) => {
  const navigation = useNavigation();
  const {
    id,
    name,
    favourite,
    star,
    assess,
    review,
    address,
    greenTravel,
    cleanliness,
    haveBreakfast,
    imageUrl,
    description,
    priceDescription,
    price,
    salePrice,
    hot,
  } = item;

  const assessLabel = useMemo(() => {
    if (assess >= 8) {
      return 'Tuyệt vời';
    } else if (assess >= 7 && assess < 8) {
      return 'Tốt';
    } else if (assess >= 5 && assess < 7) {
      return 'Bình thường';
    } else if (assess < 5) {
      return 'Kém';
    }
  }, [assess]);

  const descriptionParagraph = useMemo(() => {
    return description?.split('\n').map((item, index) => {
      return (
        <Text color="#000" fontSize={14} fontFamily={FONT_FAMILY} key={index}>
          {item}
        </Text>
      );
    });
  }, [description]);

  return (
    <Pressable
      style={styles.serviceItemWrapper}
      onPress={() => {
        navigation.navigate('Detail', {
          serviceId: 1,
        });
      }}>
      <HStack flexBasis="33%" maxHeight={'100%'}>
        {haveBreakfast && (
          <View style={styles.breakfastBox}>
            <Text style={styles.breakfastText}>Bao bữa sáng</Text>
          </View>
        )}
        <ImageBackground
          source={{
            uri: imageUrl,
          }}
          style={styles.serviceImage}
        />
      </HStack>
      <Box flex={1} style={styles.detailBox}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text style={styles.nameText}>{name}</Text>
          <Pressable style={{padding: 5}}>
            {favourite ? (
              <HEART_SOLID style={styles.favouriteIcon} />
            ) : (
              <HEART_OUTLINE style={styles.favouriteIcon} />
            )}
          </Pressable>
        </HStack>
        <HStack alignItems="center" maxWidth="100%">
          {hot && (
            <View style={styles.hotLabel}>
              <Text color="#fff" fontSize={12} fontFamily={FONT_FAMILY}>
                Nổi bật
              </Text>
            </View>
          )}
          <Rating
            ratingCount={5}
            imageSize={20}
            readonly={true}
            ratingColor="#f39f00"
            startingValue={star}
            type="custom"
          />
          <LIKE style={styles.likeIcon} />
        </HStack>
        <HStack marginTop={3} alignItems="center">
          <View style={styles.assessLabel}>
            <Text color="#fff" fontSize={12} fontFamily={FONT_FAMILY}>
              {assess}
            </Text>
          </View>
          <Text color="#000" fontSize={14} fontFamily={FONT_FAMILY} bold>
            {assessLabel}
          </Text>
          <Text
            color="rgba(120, 120, 120, 1)"
            fontSize={14}
            fontFamily={FONT_FAMILY}
            marginLeft={1}
            marginTop={-2}
            bold>
            .
          </Text>
          <Text
            color="rgba(120, 120, 120, 1)"
            fontSize={13}
            fontFamily={FONT_FAMILY}
            marginLeft={1}>
            {review} đánh giá
          </Text>
        </HStack>
        <Box marginTop={4}>
          <HStack space={2} alignItems="center" marginBottom={3}>
            <LOCATION style={styles.infomationIcon} />
            <Text color="#000" fontSize={14} fontFamily={FONT_FAMILY}>
              {address}
            </Text>
          </HStack>
          {greenTravel && (
            <HStack space={2} alignItems="center" marginBottom={3}>
              <LEAF_SKEW style={styles.infomationIcon} />
              <Text color="#000" fontSize={14} fontFamily={FONT_FAMILY}>
                Du lịch bền vững
              </Text>
            </HStack>
          )}
          {cleanliness && (
            <HStack space={2} alignItems="center">
              <LEAF style={styles.infomationIcon} />
              <Text color="#000" fontSize={14} fontFamily={FONT_FAMILY}>
                Độ sạch sẽ {cleanliness}
              </Text>
            </HStack>
          )}
        </Box>
        {price > salePrice && (
          <Box
            marginTop={4}
            bg={{
              linearGradient: {
                colors: [
                  'rgba(7, 106, 208, 1)',
                  'rgba(101, 183, 239, 1)',
                  'rgba(152, 215, 250, 1)',
                ],
                start: [0, 0],
                end: [1, 0],
              },
            }}
            justifyContent="center"
            height={10}
            style={{
              borderRadius: 10,
            }}>
            <TouchableRipple
              borderless={true}
              rippleColor="rgba(0,0,150,0.1)"
              onPress={() => console.log(1)}
              style={styles.touchableRipple}>
              <Text
                fontFamily={FONT_FAMILY}
                fontSize={14}
                textAlign="center"
                color="#fff">
                Ưu đã trong thời gian có hạn
              </Text>
            </TouchableRipple>
          </Box>
        )}
        <Box marginTop={4}>{descriptionParagraph}</Box>
        <Box marginTop={4}>
          <Text
            bold
            fontFamily={FONT_FAMILY}
            fontSize={16}
            color="#000"
            textAlign="right">
            {priceDescription}
          </Text>
          {price > salePrice && (
            <Text
              textDecorationLine="line-through"
              color="rgba(184, 30, 32, 1)"
              fontFamily={FONT_FAMILY}
              fontSize={20}
              textAlign="right"
              marginTop={1}>
              VND {price.toLocaleString('en-GB')}
            </Text>
          )}
          <Text
            color="#000"
            fontFamily={FONT_FAMILY}
            fontSize={24}
            textAlign="right"
            marginTop={2}
            bold>
            VND {salePrice.toLocaleString('en-GB')}
          </Text>
          <Text
            color="#000"
            fontFamily={FONT_FAMILY}
            fontSize={16}
            textAlign="right"
            marginTop={2}>
            Đã bao gồm thuế và phí
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
});
