import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { signIn, signUp } from '../services/FirebaseUser';
import { useNavigation } from '@react-navigation/native';
import NeumorphicButton from './NeumorphicButton';

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
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{label}</Text>
                <Text style={styles.asterisk}>*</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{isSignIn ? 'Sign In' : 'Create Account'}</Text>
            <View style={styles.inputContainer}>
                {getLabelWithAsterisk('Email')}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                {getLabelWithAsterisk('Password')}
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
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
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        minWidth: 280, // Set minimum width
        height: 48,
        borderRadius: 10,
        backgroundColor: '#ffffff', // White input background
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    errorMessage: {
        color: 'red',
        marginTop: 12,
        fontSize: 14,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    labelText: {
        marginRight: 4,
    },
    asterisk: {
        color: 'red',
    },
});
export default SignUpForm;
