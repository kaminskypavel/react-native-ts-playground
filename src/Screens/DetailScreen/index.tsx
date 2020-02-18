import {createStackNavigator} from "@react-navigation/stack";
import {Button, Text, View} from "react-native";
import randomColor from "randomcolor";
import React from "react";
import HomeScreen from "../HomeScreen";

const Stack = createStackNavigator();

function DetailsScreen({navigation}) {
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center'
            , backgroundColor: randomColor()
        }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
        </View>
    );
}

export default function () {
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
    </Stack.Navigator>

}
