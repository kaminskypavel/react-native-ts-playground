import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import NotificationsScreen from "./Screens/Notifications";
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailScreen";

const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                             screenOptions={{
                                 headerStyle: {
                                     backgroundColor: '#f4511e',
                                 },
                                 headerTintColor: '#fff',
                                 headerTitleStyle: {
                                     fontWeight: 'bold',
                                 },
                             }}
            >
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
                <Stack.Screen name="Notifications" component={NotificationsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

