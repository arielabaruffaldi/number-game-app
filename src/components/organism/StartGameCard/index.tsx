import React, {useState} from 'react';

import Button from '@atoms/Button';
import CustomText from '@atoms/CustomText';
import Card from '@molecules/Card';
import Input from '@molecules/Input';
import {View} from 'react-native';
import styles from './styles';

interface StartGameCardProps {
  action: (val: string) => void;
}

const StartGameCard = ({action}: StartGameCardProps) => {
  const [value, setValue] = useState('')
  const handleChangeNumber = (val: string) => {
    setValue(val);
  };

  return (
    <Card>
      <Input
        onChangeText={handleChangeNumber}
        placeholder="Elegí un número"
        value={value}
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button disabled={!value} onPress={() => action('')}>
          <CustomText style={[styles.buttonText]}>Limpiar</CustomText>
        </Button>
        <Button disabled={!value} onPress={() => action(value)}>
          <CustomText style={[styles.buttonText]}>Confirmar</CustomText>
        </Button>
      </View>
    </Card>
  );
};

export default StartGameCard;
