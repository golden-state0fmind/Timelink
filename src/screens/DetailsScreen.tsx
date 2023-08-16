import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Schedule your next visit!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
});

export default DetailsScreen;