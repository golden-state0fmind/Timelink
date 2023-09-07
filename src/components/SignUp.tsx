import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NeumorphicButton from './NeumorphicButton';
import { signIn, signUp } from '../services/FirebaseUser';
import { globalStyles } from '../assets/styles/globalStyles';

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSignIn, setIsSignIn] = useState(false);
    const navigation: any = useNavigation();

    const goToEditProfile = () => {
        navigation.navigate('EditProfile');
    };

    const handleAction = async () => {
        if (!email || !password) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        try {
            if (isSignIn) {
                await signIn(email, password);
                setEmail('')
                setPassword('')
                // Handle successful sign-in, navigate to the next screen, etc.
                goToEditProfile()
            } else {
                await signUp(email, password);
                setEmail('')
                setPassword('')
                // Handle successful sign-up, navigate to the next screen, etc.
                goToEditProfile()
            }
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    const getLabelWithAsterisk = (label: string) => {
        return (
            <View style={globalStyles.labelContainer}>
                <Text style={globalStyles.labelText}>{label}</Text>
                <Text style={globalStyles.asterisk}>*</Text>
            </View>
        );
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{isSignIn ? 'Sign In' : 'Create Account'}</Text>
            <View style={globalStyles.inputContainer}>
                {getLabelWithAsterisk('Email')}
                <TextInput
                    style={globalStyles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={globalStyles.inputContainer}>
                {getLabelWithAsterisk('Password')}
                <TextInput
                    style={globalStyles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            {errorMessage && <Text style={globalStyles.errorMessage}>{errorMessage}</Text>}
            <NeumorphicButton title={'Submit'} onPress={handleAction} />
            <NeumorphicButton
                title={isSignIn ? 'Create Account' : 'Sign In'}
                onPress={() => {
                    setIsSignIn(prevState => !prevState);
                    setErrorMessage(null);
                }}
            />
        </View>
    );
};


export default SignUpForm;
