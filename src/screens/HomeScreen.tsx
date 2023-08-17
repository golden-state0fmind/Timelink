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
            <Text style={styles.desc}>In our scheduling feature, you can effortlessly book appointments by selecting your preferred date and time slot from our intuitive calendar interface. Once you've chosen the perfect slot, you'll have the option to confirm your appointment through a convenient text message or email. This streamlined process ensures that you never miss out on important dates and can easily manage your schedule on the go.</Text>
            <NeumorphicButton title="Time to Thrive: Schedule Me!" onPress={goToDetails} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor:'#ffffff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    desc: {
        fontSize: 16,
        marginBottom: 24,
    },
});

export default HomeScreen;
