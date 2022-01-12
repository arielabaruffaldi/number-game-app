import React from 'react';
import {View} from 'react-native';
import CustomText from './../../atoms/CustomText';

import styles from './styles';

interface HeaderProps {
  title?: string;
}

const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <CustomText customStyle={[styles.title]} align="center" size="large">
        {title}
      </CustomText>
    </View>
  );
};

export default Header;
