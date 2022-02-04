
import React, { useState } from 'react';
import {
  View,
  Text
} from 'react-native';
import Banner from './screens/Banner/Banner';
import HomeBanner from './screens/Banner/HomeBanner';
import Card from './screens/Card/Card';
import ResFlex from './screens/ResFlex/ResFlex';
import { styles } from './style';

const App = () => {
  return (
    <View style={{marginTop:50}}>
     {/* <Text >Hello</Text> */}
     {/* <ResFlex></ResFlex> */}
     {/* <StatusBar style='auto'></StatusBar> */}
     {/* <Banner/> */}
     <HomeBanner/>
     {/* <Card/> */}
    </View>
  );
};



export default App;