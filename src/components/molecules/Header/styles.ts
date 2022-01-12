import {Colors} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: 'flex',
    backgroundColor: Colors.pink,
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  title: {
    color: Colors.white,
  },
});
