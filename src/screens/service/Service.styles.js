import {StyleSheet} from 'react-native';
import {BORDER_COLOR_PRIMARY, FONT_FAMILY} from '../../utils/styles';

export default StyleSheet.create({
  headerBox: {
    width: '100%',
    borderColor: BORDER_COLOR_PRIMARY,
    borderWidth: 1,
    padding: 5,
  },
  goBackBtn: {
    padding: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  goBackIcon: {
    maxWidth: 20,
    maxHeight: 20,
  },
  rippleHeaderBtn: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  iconHeaderBtn: {
    maxWidth: 25,
    maxHeight: 25,
    marginRight: 8,
    fontWeight: '700',
  },
  serviceItemWrapper: {
    width: '100%',
    height: 'auto',
    borderWidth: 1,
    borderColor: BORDER_COLOR_PRIMARY,
    backgroundColor: '#fff',
    overflowY: 'hidden',
    flexDirection: 'row',
    marginBottom: 15,
  },
  serviceImage: {
    width: '100%',
  },
  breakfastBox: {
    backgroundColor: 'rgba(7, 106, 208, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: '100%',
    position: 'absolute',
    zIndex: 2,
  },
  breakfastText: {
    color: '#fff',
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    color: '#fff',
  },
  detailBox: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  nameText: {
    lineHeight: 24,
    fontSize: 20,
    fontWeight: '900',
    fontFamily: FONT_FAMILY,
  },
  favouriteIcon: {
    maxWidth: 15,
    maxHeight: 15,
  },
  hotLabel: {
    backgroundColor: '#D6362A',
    borderRadius: 10,
    height: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  likeIcon: {
    maxWidth: 25,
    maxHeight: 25,
    marginLeft: 10,
  },
  assessLabel: {
    backgroundColor: '#043D96',
    borderRadius: 10,
    height: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  infomationIcon: {
    maxWidth: 25,
    maxHeight: 25,
  },
  touchableRipple: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
