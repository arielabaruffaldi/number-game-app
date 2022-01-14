import React, {useState} from 'react';
import {View} from 'react-native';

import CustomText from '@atoms/CustomText';

import styles from './styles';
import StartGameCard from 'src/components/organism/StartGameCard';

interface StartGameProps {
  number: string;
  setNumber: (val: string) => void;
}

const StartGame = ({setNumber}: StartGameProps) => {
  return (
    <>
      <View style={styles.container}>
        <CustomText style={styles.title} size="medium" align="center">
          Comenzar Juego
        </CustomText>
        <StartGameCard action={setNumber} />
      </View>
    </>
  );
};

export default StartGame;
