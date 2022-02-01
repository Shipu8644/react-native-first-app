import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  View,
  Text
} from 'react-native';
import Banner from './screens/Banner/Banner';
import Banner1 from './screens/Banner/Banner1';
import Card from './screens/Card/Card';
import ResFlex from './screens/ResFlex/ResFlex';

const App = () => {
  return (
    <View>
     {/* <Text >Hello</Text> */}
     {/* <ResFlex></ResFlex> */}
     {/* <StatusBar style='auto'></StatusBar> */}
     {/* <Banner/> */}
     <Banner1/>
     {/* <Card/> */}
    </View>
  );
};



export default App;