import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NotificationsScreen from "./Screens/Notifications";
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabBar from './Components/TabBar';

const Tab = createBottomTabNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <TabBar>
            {/*    todo : refactor so the routes will be here*/}
            </TabBar>
        </NavigationContainer>
    );
}

