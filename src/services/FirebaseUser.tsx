import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut, } from "firebase/auth";
import Constants from 'expo-constants';

// Initialize Firebase app
const expoConfig = Constants.expoConfig;
const firebaseConfig = {
    // process.env, is not directly applicable in the context of React Native.
    // typically don't have access to the process.env object like you do in Node.js.

    // apiKey: process.env.API_KEY,
    // authDomain: process.env.AUTH_DOMAIN,
    // projectId: process.env.PROJECT_ID,
    
    apiKey: expoConfig?.extra?.API_KEY,
    authDomain: expoConfig?.extra?.AUTH_DOMAIN,
    projectId: expoConfig?.extra?.PROJECT_ID,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Sign up user
export const signUp = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // redirect here
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle the error
        alert(errorMessage)
    }
};

// User sign in
export const signIn = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        // redirect here
    } catch (error: any) {
        alert(`Error signing in: ${error.message}`);
    }
};

// User sign out
export const signOut = async () => {
    try {
        await firebaseSignOut(auth); // Rename the imported 'signOut' to 'firebaseSignOut' to avoid conflict
        // redirect here
    } catch (error: any) {
        alert(`Error signing in: ${error.message}`);
    }
};
