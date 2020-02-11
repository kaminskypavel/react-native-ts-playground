import React, {useEffect, useState} from 'react';
import {Platform, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import styled from "styled-components/native"
import notifee from "@notifee/react-native"

const RequestButton = styled.Button({
    margin: 20
});

const RequestTokenView = styled.Text({
    color: 'red',
    padding: 30
});

const Container = styled.View({
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
});

// IOS RELATED
async function registerAppWithFCM() {
    await messaging().registerForRemoteNotifications();
}

// IOS RELATED
async function requestPermission() {
    const granted = messaging().requestPermission();

    if (granted) {
        console.log('User granted messaging permissions!');
    } else {
        console.log('User declined messaging permissions :(');
    }
}


export default function App() {
    const [token, setToken] = useState("NO-TOKEN");

    const getToken = async () => {
        console.log(new Date(), 'getting token');
        const fcmToken = await messaging().getToken();
        setToken(fcmToken);
        console.log(fcmToken);
    };

    const onMessageReceived = async (message) => {
        const channelId = await notifee.createChannel({
            id: 'orders',
            name: 'Orders',
        });

        // Display a notification
        // https://notifee.app/react-native/docs/android/appearance
        await notifee.displayNotification({
            title: '<p style="color: green;"><b>Styled HTMLTitle</span></p></b></p>',
            body: JSON.stringify(message.data),
            android: {
                channelId,
                // ongoing: true,
                largeIcon: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg',
                color: '#4caf50',
                actions: [
                    {
                        title: 'Reply 📝',
                        pressAction: {id: 'reply'},
                        input: {
                            allowFreeFormInput: true, // set to false
                            choices: ['Yes', 'No', 'Maybe'],
                            placeholder: 'Reply to Sarah...',
                        },
                    }
                ],
            },
        });
    };

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async (message) => {
            console.log(`onMessage`, message.data);
            await onMessageReceived(message);
        });

        messaging().setBackgroundMessageHandler(async (message) => {
            console.log(`background`, message.data);
            await onMessageReceived(message);
        });

    }, []);

    return (
        <Container>
            <Text>{Platform.OS} {Platform.Version}</Text>
            <RequestButton title={"Request Token"} onPress={() => getToken()}/>
            <RequestTokenView> {token}</RequestTokenView>
            <RequestButton title={"Local Notification"} onPress={() => onMessageReceived(null)}/>
        </Container>
    );
}

