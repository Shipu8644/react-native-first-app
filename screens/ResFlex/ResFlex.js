import { Text, View } from 'react-native';
import React from 'react';
import { flexStyles } from './resFlexStyle';
const ResFlex = () => {
  return (
    <View style={flexStyles.body}>
      <View style={flexStyles.view1}>
        <Text style={flexStyles.text}>1</Text>
      </View>
      <View style={flexStyles.view2}>
        <Text style={flexStyles.text}>2</Text>
      </View>
      <View style={flexStyles.view3}>
        <Text style={flexStyles.text}>3</Text>
      </View>
    </View>
  );
};

export default ResFlex;


