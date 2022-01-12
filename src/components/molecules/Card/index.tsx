import React, {ReactNode} from 'react';
import {View} from 'react-native';

import styles from './styles';

interface CardProps {
  children?: ReactNode;
}

const Card = ({children}: CardProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;
