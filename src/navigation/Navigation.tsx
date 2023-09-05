import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const commonTabScreenOptions = {
    tabBarStyle: {
        backgroundColor: '#E7D5C7',
        elevation: 0,
    },
    tabBarActiveTintColor: '#E3826F',
    tabBarInactiveTintColor: 'black',
    tabBarLabelStyle: {
        fontSize: 14,
    },
    tabBarShowLabel: true,
};

const HomeTabOptions = {
    tabBarLabel: 'Home',
    tabBarStyle: {
        backgroundColor: '#E7D5C7',
        elevation: 0,
    },
    headerShown: false,
    tabBarIcon: () => null, // Hide the tab icon
};

const ProfileTabOptions = {
    tabBarLabel: 'Profile',
    headerShown: false,
    tabBarIcon: () => null, // Hide the tab icon
};

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={HomeTabOptions} name="Home" component={HomeScreen} />
            <Stack.Screen options={HomeTabOptions} name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
};

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={ProfileTabOptions} name="Profile" component={ProfileScreen} />
            <Stack.Screen options={ProfileTabOptions} name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Tab.Navigator screenOptions={commonTabScreenOptions}>
                <Tab.Screen name="Home" options={HomeTabOptions} component={HomeStack} />
                <Tab.Screen name="Profile" options={ProfileTabOptions} component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};


export default Navigation;