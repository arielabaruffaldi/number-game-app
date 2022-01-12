import React, {ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './styles';

interface CustomTextProps {
  customStyle?: TextStyle | TextStyle[];
  size?: 'small' | 'medium' | 'large';
  weight?: 'light' | 'regular' | 'semiBold' | 'bold';
  color?: 'black' | 'white' | 'gray';
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

const CustomText = ({
  customStyle,
  size = 'small',
  weight = 'regular',
  color = 'black',
  align = 'left',
  children,
}: CustomTextProps) => {
  return (
    <Text
      style={[
        styles[size],
        styles[weight],
        styles[color],
        styles.default,
        styles[align],
        customStyle,
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;
