import React from 'react';
import {TextInput, TextStyle} from 'react-native';

import styles from './styles';

interface InputProps {
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  placeholder?: string;
  defaultValue?: string;
  style: TextStyle | TextStyle[];
  value?: string;
  onChangeText: (text: string) => void;
}

const Input = ({
  keyboardType = 'default',
  placeholder,
  value,
  style,
  onChangeText,
}: InputProps) => {
  return (
    <TextInput
      style={[styles.input, style && style]}
      autoFocus={true}
      keyboardType={keyboardType}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default Input;
