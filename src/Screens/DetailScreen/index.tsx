import {Button, Text, View} from "react-native";
import randomColor from "randomcolor";
import React from "react";

export default function DetailsScreen({navigation}) {
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
