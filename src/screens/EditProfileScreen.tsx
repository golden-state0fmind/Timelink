import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { auth, signOut } from '../services/FirebaseUser';
import { useNavigation } from '@react-navigation/native';
import NeumorphicButton from '../components/NeumorphicButton';
import { globalStyles } from '../assets/styles/globalStyles';

const EditProfileScreen: React.FC = () => {
    const navigation: any = useNavigation();
    const user = auth.currentUser;
    
    const handleSignOut = () => {
        signOut()
        navigation.navigate('Profile');
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>User</Text>
            <View>
                <Text style={globalStyles.desc} >Email: {user!.email}</Text>
            </View>
            <NeumorphicButton title="Sign Out" onPress={handleSignOut} />
        </View>
    );
};


export default EditProfileScreen;