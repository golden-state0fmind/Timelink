import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Schedule from '../components/Calendar';

const DetailsScreen = () => {

    return (
        <View style={styles.container}>
            <Schedule />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

export default DetailsScreen;
