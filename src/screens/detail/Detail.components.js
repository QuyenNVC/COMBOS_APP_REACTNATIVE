import {Box, HStack, Text} from 'native-base';
import {memo} from 'react';
import {FONT_FAMILY} from '../../utils/styles';

import styles from './Detail.styles';

export const RoomInfmation = memo(({label, text}) => {
  return (
    <Box flexShrink={1}>
      <Text bold fontFamily={FONT_FAMILY} fontSize="16" marginBottom={0.5}>
        {label}
      </Text>
      <Text
        bold
        fontFamily={FONT_FAMILY}
        fontSize="16"
        color="rgba(7, 106, 208, 1)">
        {text}
      </Text>
    </Box>
  );
});

export const HealthInfomation = memo(props => {
  return (
    <HStack alignItems="center" space={2}>
      <props.icon style={styles.normalIcon} />
      <Text bold fontFamily={FONT_FAMILY} fontSize="17" flexShrink={1}>
        {props.label}
      </Text>
      {props.number && (
        <Text
          fontFamily={FONT_FAMILY}
          fontSize="16"
          color="rgba(120, 120, 120, 1)"
          flexShrink={1}>
          - {props.number} biện pháp
        </Text>
      )}
    </HStack>
  );
});

export const UtilitiesInfomation = memo(props => {
  return (
    <HStack alignItems="center" space={1} marginTop={2}>
      <props.icon style={styles.normalIcon} />
      <Text fontFamily={FONT_FAMILY} fontSize="13">
        {props.utilities}
      </Text>
    </HStack>
  );
});

export const LocationInfomation = memo(({label, distance}) => {
  return (
    <HStack justifyContent="space-between" space={5}>
      <Text fontFamily={FONT_FAMILY} fontSize="14" flexShrink={1}>
        {label}
      </Text>
      <Text fontFamily={FONT_FAMILY} fontSize="14">
        {distance} m
      </Text>
    </HStack>
  );
});
