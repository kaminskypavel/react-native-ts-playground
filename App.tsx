import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import notifee from '@notifee/react-native';

export default function App() {

    async function onDisplayNotification() {
        // Create a channel
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        // https://notifee.app/react-native/docs/android/appearance
        await notifee.displayNotification({
            title: '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
            subtitle: '&#129395;',
            body:
                'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
            android: {
                channelId,
                color: '#4caf50',
                actions: [
                    {
                        title: '<b>Dance</b> &#128111;',
                        pressAction: {id: 'dance'},
                    },
                    {
                        title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
                        pressAction: {id: 'cry'},
                    },
                ],
            },
        });
    }


    return (
        <View style={styles.container}>
            <Button
                title="Display Notification"
                onPress={() => onDisplayNotification()}
            />
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
