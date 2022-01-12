import React from 'react';
import {View} from 'react-native';

import CustomText from '@atoms/CustomText';

import styles from './styles';
import StartGameCard from 'src/components/organism/StartGameCard';

const StartGame = () => {
  return (
    <View>
      <CustomText customStyle={styles.title} size="medium" align="center">
        Comenzar Juego
      </CustomText>
      <StartGameCard />
    </View>
  );
};

export default StartGame;
