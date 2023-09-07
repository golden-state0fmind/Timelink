import React from 'react';
import { View } from 'react-native';
import SignUpForm from '../components/SignUp';
import { globalStyles } from '../assets/styles/globalStyles';

const ProfileScreen = () => {
    return (
        <View style={globalStyles.container}>
            <SignUpForm />
        </View>
    );
};

export default ProfileScreen;
