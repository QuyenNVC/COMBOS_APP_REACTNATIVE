import {StyleSheet} from 'react-native';
import {BORDER_COLOR_PRIMARY, COLOR_PRIMARY} from '../../utils/styles';

export default StyleSheet.create({
  // HEADER
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

  // GENERAL INFORMATION
  assessLabel: {
    backgroundColor: '#043D96',
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  likeIcon: {
    maxWidth: 25,
    maxHeight: 25,
    marginLeft: 10,
  },
  boxWrapper: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  normalIcon: {
    maxWidth: 20,
    maxHeight: 20,
  },
  nextButton: {
    width: 35,
    height: 35,
    padding: 5,
    borderRadius: 18,
  },
  nextButtonIcon: {
    maxWidth: 25,
    maxHeight: 25,
  },

  // LINK TO GOOGLE MAP
  addressWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: COLOR_PRIMARY,
  },

  // THÔNG TIN ĐI LẠI
  titleWrapper: {
    paddingBottom: 25,
    borderBottomColor: BORDER_COLOR_PRIMARY,
    borderBottomWidth: 1,
  },
  titleWrapper2: {
    paddingVertical: 15,
    borderBottomColor: BORDER_COLOR_PRIMARY,
    borderBottomWidth: 1,
  },
  mallIcon: {
    maxWidth: 35,
    maxHeight: 35,
  },
  noteWrapper: {
    paddingTop: 15,
  },

  // SHARE LINK
  buttonShareLink: {
    paddingHorizontal: 15,
    paddingVertical: 19,
    borderColor: 'rgba(7, 106, 208, 1)',
    backgroundColor: '#fff',
    borderWidth: 2,
  },

  // ORDER
  buttonOrder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(7, 106, 208, 1)',
    height: 80,
  },
});
