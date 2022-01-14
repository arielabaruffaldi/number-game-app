import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import Header from '@molecules/Header';
import StartGame from '@screens/StartGame';
import GameScreen from '@screens/GameScreen';

const App = () => {
  const [number, setNumber] = useState('');
  console.log("number", number)
  return (
    <SafeAreaView>
      <Header title="Adivina el número" />
      {number !== '' ? (
        <GameScreen userOption={number} />
      ) : (
        <StartGame setNumber={setNumber} number={number} />
      )}
    </SafeAreaView>
  );
};

export default App;
