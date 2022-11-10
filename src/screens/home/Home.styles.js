import {StyleSheet} from 'react-native';
import {
  COLOR_PRIMARY,
  DEVICE_WIDTH,
  FONT_FAMILY,
  TEXT_COLOR_PRIMARY,
} from '../../utils/styles';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: COLOR_PRIMARY,
  },
  banner: {
    height: 250,
  },

  // Menu category
  product: {
    borderRadius: 20,
    backgroundColor: 'rgba(243, 159, 0, 1)',
    paddingHorizontal: 25,
    paddingVertical: 20,
    justifyContent: 'space-between',
    flex: 1,
    overflow: 'hidden',
    aspectRatio: 3 / 2,
  },
  productIcon: {
    marginLeft: 'auto',
    maxWidth: 30,
    maxHeight: 30,
  },
  productLabel: {
    color: '#fff',
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: '700',
  },

  // Menu infomation
  infoIconWrapper: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoIcon: {
    maxWidth: 50,
    maxHeight: 50,
  },
  infoLabel: {
    fontFamily: FONT_FAMILY,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: TEXT_COLOR_PRIMARY,
  },
  // Style carousel
  backgroundImage: {
    width: DEVICE_WIDTH - 30,
    borderRadius: 10,
    overflow: 'hidden',
  },
  // sale
  saleItem: {
    marginLeft: 15,
    overflow: 'hidden',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 300,
    height: (300 * 17) / 36,
    justifyContent: 'space-between',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  saleButton: {
    minWidth: 150,
    borderRadius: 100,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 25,
  },
});
