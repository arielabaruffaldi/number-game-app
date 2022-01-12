import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@theme';

export default StyleSheet.create({
  default: {
    color: Colors.black,
    fontFamily: Fonts.MANROPE_MEDIUM,
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  error: {
    color: Colors.error,
  },
  black: {
    color: Colors.black,
  },
  gray: {
    color: Colors.gray,
  },
  white: {
    color: Colors.white,
  },
  light: {
    fontFamily: Fonts.MANROPE_REGULAR,
  },
  regular: {
    fontFamily: Fonts.MANROPE_REGULAR,
  },
  semiBold: {
    fontFamily: Fonts.MANROPE_SEMIBOLD,
  },
  bold: {
    fontFamily: Fonts.MANROPE_BOLD,
  },
  small: {
    fontSize: Fonts.SIZES.SMALL,
  },
  medium: {
    fontSize: Fonts.SIZES.MEDIUM,
  },
  large: {
    fontSize: Fonts.SIZES.LARGE,
  },
});
