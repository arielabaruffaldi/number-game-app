import React from 'react';
import {View} from 'react-native';

import Header from '@molecules/Header';
import StartGame from '@screens/StartGame';

const App = () => {
  return (
    <View>
      <Header title="Adivina el número" />
      <StartGame />
    </View>
  );
};

export default App;
