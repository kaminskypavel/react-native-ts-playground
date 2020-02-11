import React, {useEffect, useState} from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import styled from "styled-components/native"

async function registerAppWithFCM() {
    await messaging().registerForRemoteNotifications();
}

const RequestButton = styled.Button({
    marginTop: "20px",
    marginBottom: "1px"
});

const RequestTokenView = styled.Text({
    color: 'red',
    padding: 30
});

async function requestPermission() {
    const granted = messaging().requestPermission();

    if (granted) {
        console.log('User granted messaging permissions!');
    } else {
        console.log('User declined messaging permissions :(');
    }
}

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

export default function App() {
    const [token, setToken] = useState("NO-TOKEN");

    const getToken = async () => {
        console.log(new Date(), 'getting token');
        const fcmToken = await messaging().getToken();
        setToken(fcmToken);
        console.log(fcmToken);
    };

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log('FCM Message Data:', remoteMessage.data);

            // Update a users messages list using AsyncStorage
            const currentMessages = await AsyncStorage.getItem('messages') || "[]";
            const messageArray = JSON.parse(currentMessages);
            messageArray.push(remoteMessage.data);
            await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
        });

        return unsubscribe
    }, []);

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <RequestButton title={"Request Token"} onPress={() => getToken()}/>
            <RequestTokenView> {token}</RequestTokenView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
