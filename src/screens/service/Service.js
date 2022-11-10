import React, {memo, useCallback, useState} from 'react';
import {Box, Button, HStack, Text} from 'native-base';
import {FlatList, Modal, View} from 'react-native';
import {ServiceItem} from './Service.components';

import styles from './Service.styles';
import ARROW_LEFT from '../../../assets/svg/arrow_left.svg';
import SORTER from '../../../assets/svg/sorter.svg';
import MENU from '../../../assets/svg/menu.svg';
import LOCATION from '../../../assets/svg/location.svg';
import {TouchableRipple} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {BottomNavigationSlice} from '../../redux/reducers/BottomNavigationReducer';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {COLOR_PRIMARY} from '../../utils/styles';

const Service = memo(({navigation}) => {
  const dispatch = useDispatch();
  const route = useRoute();
  useFocusEffect(
    useCallback(() => {
      dispatch(BottomNavigationSlice.actions.change(true));
    }, []),
  );

  const {categoryId} = route.params;
  const [showSorter, setShowSorter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const services = [
    {
      id: 1,
      name: 'Cochin Sang Hotel',
      hot: true,
      favourite: false,
      liked: false,
      star: 5,
      assess: 8.5,
      review: 202,
      address: 'Quận 1, cách trung tâm 150m',
      greenTravel: true,
      cleanliness: 9.2,
      description:
        'Phòng Vienot giường đôi, không cửa số. có ban công.\n1 phòng khách sạn : 1 giường.',
      priceDescription: 'Giá cho 1 đêm, 2 người lớn',
      price: 1340000,
      salePrice: 900000,
      haveBreakfast: true,
      imageUrl: 'https://picsum.photos/id/1/200/300',
    },
    {
      id: 2,
      name: 'Cochin Sang Hotel',
      hot: true,
      favourite: true,
      liked: false,
      star: 5,
      assess: 8.5,
      review: 202,
      address: 'Quận 1, cách trung tâm 150m',
      greenTravel: true,
      cleanliness: 9.2,
      description:
        'Phòng Vienot giường đôi, không cửa số. có ban công.\n1 phòng khách sạn : 1 giường.',
      priceDescription: 'Giá cho 1 đêm, 2 người lớn',
      price: 1340000,
      salePrice: 900000,
      haveBreakfast: true,
      imageUrl: 'https://picsum.photos/id/2/200/300',
    },
    {
      id: 3,
      name: 'Cochin Sang Hotel',
      hot: true,
      favourite: true,
      liked: false,
      star: 5,
      assess: 8.5,
      review: 202,
      address: 'Quận 1, cách trung tâm 150m',
      greenTravel: true,
      cleanliness: 9.2,
      description:
        'Phòng Vienot giường đôi, không cửa số. có ban công.\n1 phòng khách sạn : 1 giường.',
      priceDescription: 'Giá cho 1 đêm, 2 người lớn',
      price: 1340000,
      salePrice: 900000,
      haveBreakfast: true,
      imageUrl: 'https://picsum.photos/id/3/200/300',
    },
  ];

  const _renderServiceItem = useCallback(({item, index}) => {
    return <ServiceItem item={item} key={index} />;
  }, []);

  const _keyServiceItem = useCallback(item => item.id, []);

  const _renderHeader = useCallback(() => {
    return (
      <>
        <View style={styles.headerBox}>
          <TouchableRipple
            rippleColor="rgba(0,0,0,0.05)"
            borderless={true}
            style={styles.goBackBtn}
            onPress={() => navigation.goBack()}>
            <ARROW_LEFT style={styles.goBackIcon} />
          </TouchableRipple>
        </View>
        <HStack alignItems="center" justifyContent="space-around" paddingY={3}>
          <TouchableRipple
            style={styles.rippleHeaderBtn}
            borderless={true}
            rippleColor="rgba(0,0,0,0.1)"
            onPress={() => console.log('sorter')}>
            <>
              <LOCATION style={styles.iconHeaderBtn} />
              <Text>Bản đồ</Text>
            </>
          </TouchableRipple>
          <TouchableRipple
            style={styles.rippleHeaderBtn}
            borderless={true}
            rippleColor="rgba(0,0,0,0.1)"
            onPress={() => setShowSorter(true)}>
            <>
              <SORTER style={styles.iconHeaderBtn} />
              <Text>Sắp xếp</Text>
            </>
          </TouchableRipple>
          <TouchableRipple
            style={styles.rippleHeaderBtn}
            borderless={true}
            rippleColor="rgba(0,0,0,0.1)"
            onPress={() => setShowFilter(true)}>
            <>
              <MENU style={styles.iconHeaderBtn} />
              <Text>Lọc</Text>
            </>
          </TouchableRipple>
        </HStack>
      </>
    );
  }, []);
  return (
    <>
      <Box padding="3" backgroundColor={COLOR_PRIMARY}>
        <FlatList
          data={services}
          showsVerticalScrollIndicator={false}
          renderItem={_renderServiceItem}
          keyExtractor={_keyServiceItem}
          initialNumToRender={3}
          ListHeaderComponent={_renderHeader}
        />
      </Box>
      <Modal
        animationType="slide"
        visible={showSorter}
        onRequestClose={() => {
          setShowSorter(false);
        }}>
        {/* FORM SORTER */}
        <Box padding="1.5">
          <HStack justifyContent="space-between" alignItems="center">
            <Text bold>Sắp xếp</Text>
            <Button onPress={() => setShowSorter(false)}>x</Button>
          </HStack>
        </Box>
      </Modal>
      <Modal
        animationType="slide"
        visible={showFilter}
        onRequestClose={() => {
          setShowFilter(false);
        }}>
        {/* FORM FILTER */}
        <Box padding="1.5">
          <HStack justifyContent="space-between" alignItems="center">
            <Text bold>Tìm kiếm</Text>
            <Button onPress={() => setShowFilter(false)}>x</Button>
          </HStack>
        </Box>
      </Modal>
    </>
  );
});

export default Service;
