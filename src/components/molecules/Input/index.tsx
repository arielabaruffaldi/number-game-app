import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

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
  value?: string;
  onChangeText: (text: string) => void;
}

const Input = ({
  keyboardType = 'default',
  placeholder,
  value,
  onChangeText,
}: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      autoFocus={true}
      keyboardType={keyboardType}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default Input;
