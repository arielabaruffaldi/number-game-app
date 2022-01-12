import {Colors} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
    flexWrap: 'wrap',
  },
  buttonText: {
    color: Colors.white,
    alignSelf: 'center',
  },
});
