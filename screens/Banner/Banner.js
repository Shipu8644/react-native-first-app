import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
const Banner = () => {
    return (
        <View style={bannerStyles.container}>
           <Text>Banner</Text>

        </View>
    );
};

const bannerStyles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        width: 500
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 450,
        height: 300,
        resizeMode:"center"
    }
});


export default Banner;
