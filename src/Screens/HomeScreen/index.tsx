import {Button, Text, View} from "react-native";
import React from "react";

export default function HomeScreen({navigation}) {
    const [count, setCount] = React.useState(0);

    navigation.setOptions({

        headerRight: () => (
            <Button onPress={() => setCount(c => c + 1)} title="Update count" />
        ),
    });

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
