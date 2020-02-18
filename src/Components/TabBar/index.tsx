import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Text, View} from "react-native";
import HomeScreen from "../../Screens/HomeScreen";
import DetailsScreen from "../../Screens/DetailScreen";
import NotificationsScreen from "../../Screens/Notifications";

const Tab = createBottomTabNavigator();

function IconWithBadge({name, badgeCount, color, size}) {
    return (
        <View style={{width: 24, height: 24, margin: 5}}>
            <Ionicons name={name} size={size} color={color}/>
            {badgeCount > 0 && (
                <View
                    style={{
                        // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
                        position: 'absolute',
                        right: -6,
                        top: -3,
                        backgroundColor: 'red',
                        borderRadius: 6,
                        width: 12,
                        height: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
                        {badgeCount}
                    </Text>
                </View>
            )}
        </View>
    );
}

export default (props) => {
    return (<Tab.Navigator initialRouteName="Home"
                           screenOptions={({route}) => ({
                               tabBarIcon: ({focused, color, size}) => {
                                   console.log(route.name);
                                   let icon;

                                   switch (route.name.toLowerCase()) {
                                       case 'home':
                                           return <AntIcons name={'home'} size={size} color={color}/>;
                                       case 'notifications':
                                           return <IconWithBadge name={'ios-notifications'}
                                                                 {...props}
                                                                 badgeCount={3}
                                                                 size={size}
                                                                 color={color} />;
                                       case 'details':
                                           return <MaterialIcons name={'details'} size={size}
                                                                 color={color}/>;
                                       default:
                                           return <Ionicons name={'ios-add-circle'} size={size}
                                                            color={color}/>;
                                   }

                                   // You can return any component that you like here!

                               },
                           })}
                           tabBarOptions={{
                               activeTintColor: 'blue',
                               inactiveTintColor: 'gray',
                           }}

    >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Details" component={DetailsScreen}/>
        <Tab.Screen name="Notifications" component={NotificationsScreen}/>

    </Tab.Navigator>);
}
