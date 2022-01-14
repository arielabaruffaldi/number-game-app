import React, {useState} from 'react';
import {Text, View} from 'react-native';

import CustomText from '@atoms/CustomText';

import Card from '@molecules/Card';
import Button from '@atoms/Button';

import styles from './styles';

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number,
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
};

interface GameScreenProps {
  userOption: string;
}

const GameScreen = ({userOption}: GameScreenProps) => {
  /*   const [currentGuess, setCurrentGuess] = useState(
      generateRandomBetween(1, 100, Number(userOption)),
    ); */

  const currentGuess = generateRandomBetween(0, 100, Number(userOption));

  return (
    <View style={styles.container}>
      <CustomText size="medium" align="center">
        La suposición del oponente
      </CustomText>

      <CustomText align="center" size="large">
        {currentGuess}
      </CustomText>
      <Card style={styles.buttonContainer}>
        <Button onPress={() => console.log('Click')}>
          <CustomText style={styles.buttonText} color="white" align="center">
            MENOR
          </CustomText>
        </Button>
        <Button onPress={() => console.log('Click')}>
          <CustomText style={styles.buttonText} align="center" color="white">
            MAYOR
          </CustomText>
        </Button>
      </Card>
    </View>
  );
};

export default GameScreen;
