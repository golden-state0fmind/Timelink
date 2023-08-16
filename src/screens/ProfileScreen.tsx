import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignUpForm from '../components/SignUp';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <SignUpForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProfileScreen;
