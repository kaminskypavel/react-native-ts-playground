import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabBar from './Components/TabBar';
import {Button, View} from "react-native";

const Tab = createBottomTabNavigator();


export default function App() {
    const ref = React.useRef(null);

    return (
        <View style={{flex: 1}}>
            <Button title="Navigate Home"
                    onPress={() =>
                        ref.current
                            .navigate('Home')}/>
            <NavigationContainer ref={ref}>
                <TabBar>

                    {/*    todo : refactor so the routes will be here*/}
                </TabBar>
            </NavigationContainer>
        </View>
    );
}

