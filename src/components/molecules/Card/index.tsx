import React, {ReactNode} from 'react';
import {TextStyle, View} from 'react-native';

import styles from './styles';

interface CardProps {
  children?: ReactNode;
  style?: TextStyle | TextStyle[];
}

const Card = ({children}: CardProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;
