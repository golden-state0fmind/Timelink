import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../assets/styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import NeumorphicButton from '../components/NeumorphicButton';


const HomeScreen = () => {
    const navigation: any = useNavigation();

    const goToDetails = () => {
        navigation.navigate('Details');
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Welcome Guest!</Text>
            <Text style={globalStyles.desc}>In our scheduling feature, you can effortlessly book appointments by selecting your preferred date and time slot from our intuitive calendar interface. Once you've chosen the perfect slot, you'll have the option to confirm your appointment through a convenient text message or email. This streamlined process ensures that you never miss out on important dates and can easily manage your schedule on the go.</Text>
            <NeumorphicButton title="Book Appointment!" onPress={goToDetails} />
        </View>
    );
};


export default HomeScreen;
