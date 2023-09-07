import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#E7D5C7',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#521908'
    },
    desc: {
        fontSize: 20,
        marginBottom: 24,
        color: '#521908'
    },
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        minWidth: 280, // Set minimum width
        height: 48,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        fontSize: 20,
    },
    errorMessage: {
        color: 'red',
        marginTop: 12,
        fontSize: 20,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    labelText: {
        marginRight: 4,
        fontSize: 20,
        color: '#521908'
    },
    asterisk: {
        color: 'red',
    }
});