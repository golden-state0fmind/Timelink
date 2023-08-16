import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { auth, signOut } from '../services/FirebaseUser';
import { useNavigation } from '@react-navigation/native';
import NeumorphicButton from '../components/NeumorphicButton';

const EditProfileScreen: React.FC = () => {
    const navigation: any = useNavigation();
    const user = auth.currentUser;
    
    const handleSignOut = () => {
        signOut()
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.userContainer}>
                <Text>Email: {user!.email}</Text>
            </View>
            <NeumorphicButton title="Sign Out" onPress={handleSignOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: '#f0f0f0', // Light gray background
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    userContainer: {
        marginBottom: 16,
    },
});

export default EditProfileScreen;