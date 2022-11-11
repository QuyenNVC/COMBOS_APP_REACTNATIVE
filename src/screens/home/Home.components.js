import {Box, HStack} from 'native-base';
import {memo} from 'react';
import {Image, Pressable, TouchableOpacity, View} from 'react-native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

import styles from './Home.styles';

export const CarouselComponent = memo(({data, width, height, duration}) => {
  const progressValue = useSharedValue(0);

  return (
    <Box marginTop={15} paddingX={15}>
      {/* <GestureHandlerRootView> */}
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={duration}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            style={[styles.backgroundImage, {height}]}>
            <Image
              source={item.src}
              style={[styles.backgroundImage, {height}]}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        )}
      />
      {/* </GestureHandlerRootView> */}
      <HStack justifyContent="center" space={2} marginTop={15}>
        {data.map((item, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                progressValue.value = index;
              }}>
              <PaginationItem
                backgroundColor="rgba(6, 82, 178, 1)"
                animValue={progressValue}
                index={index}
                isRotate={false}
                length={data.length}
              />
            </Pressable>
          );
        })}
      </HStack>
    </Box>
  );
});

export const PaginationItem = props => {
  const {animValue, index, length, backgroundColor, isRotate} = props;
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: 'rgba(204, 237, 252, 1)',
        width,
        height: width,
        borderRadius: 50,
        overflow: 'hidden',
        transform: [
          {
            rotateZ: isRotate ? '90deg' : '0deg',
          },
        ],
      }}>
      <Animated.View style={[styles.paginationActivedItem, animStyle]} />
    </View>
  );
};
