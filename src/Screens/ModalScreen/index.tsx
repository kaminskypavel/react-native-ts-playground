import {Button, Text, View} from "react-native";
import React from "react";

export function ModalScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30}}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss"/>
        </View>
    );
}

