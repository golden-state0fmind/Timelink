import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface NeumorphicButtonProps {
    title: string;
    onPress: () => void;
}


const NeumorphicButton = ({ title, onPress }: NeumorphicButtonProps) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#EAEAEA',
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 20,
        shadowColor: '#B0B0B0',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#521908',
        textAlign: 'center',
    },
});

export default NeumorphicButton;
