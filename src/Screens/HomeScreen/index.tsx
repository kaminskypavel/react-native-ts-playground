import {Button, Text, View} from "react-native";
import React from "react";
import {useFocusEffect} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {ModalScreen} from "../ModalScreen";
import DetailsScreen from "../DetailScreen";


const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

export default function RootStackScreen() {
    return (
        <RootStack.Navigator mode="modal">
            <RootStack.Screen
                name="Main"
                component={MainStackScreen}
                options={{headerShown: false}}
            />
            <RootStack.Screen name="MyModal" component={ModalScreen}/>
        </RootStack.Navigator>
    );
}

function MainStackScreen() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen}/>
            <MainStack.Screen name="Details" component={DetailsScreen}/>
        </MainStack.Navigator>
    );
}

function HomeScreen({navigation}) {
    const [count, setCount] = React.useState(0);

    navigation.setOptions({
        headerRight: () => (
            <Button onPress={() => setCount(c => c + 1)} title="Update count"/>
        ),
    });

    useFocusEffect(
        React.useCallback(() => {
            console.log('focused!!');

            return () => {
                console.log('unfocused');
            };
        }, []));

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Text>Count: {count}</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}
