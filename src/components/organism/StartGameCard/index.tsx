import Button from '@atoms/Button';
import CustomText from '@atoms/CustomText';
import Card from '@molecules/Card';
import Input from '@molecules/Input';
import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';

const StartGameCard = () => {
  const [number, setNumber] = useState(' ');
  const handleChangeNumber = (val: string) => {
    setNumber(val);
  };

  return (
    <Card>
      <Input
        onChangeText={handleChangeNumber}
        placeholder="Elegí un número"
        value={number}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button disabled={!number} onPress={() => setNumber(' ')}>
          <CustomText customStyle={[styles.buttonText]}>Limpiar</CustomText>
        </Button>
        <Button disabled={!number} onPress={() => setNumber(' ')}>
          <CustomText customStyle={[styles.buttonText]}>Confirmar</CustomText>
        </Button>
      </View>
    </Card>
  );
};

export default StartGameCard;
