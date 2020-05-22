//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const PageOne = () => {
    return (
        <View style={styles.container}>
            <Text>PageOne</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default PageOne;
