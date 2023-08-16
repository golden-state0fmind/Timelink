import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NeumorphicButton from '../components/NeumorphicButton';


const HomeScreen = () => {
    const navigation: any = useNavigation();

    const goToDetails = () => {
        navigation.navigate('Details');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Guest!</Text>
            <NeumorphicButton title="Time to Thrive: Schedule Me!" onPress={goToDetails} />
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

export default HomeScreen;
