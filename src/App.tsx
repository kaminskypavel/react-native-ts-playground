import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import NotificationsScreen from "./Screens/Notifications"

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <NotificationsScreen/>
        </NavigationContainer>
    );
}

