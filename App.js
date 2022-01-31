import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  View,
  Text
} from 'react-native';
import ResFlex from './screens/ResFlex/ResFlex';

const App = () => {
  return (
    <>
     <Text >Hello</Text>
     <ResFlex></ResFlex>
     <StatusBar style='auto'></StatusBar>
    </>
  );
};



export default App;