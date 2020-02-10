import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import notifee from '@notifee/react-native';

export default function App() {

    async function onDisplayNotification() {
        // Create a channel
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            sound: 'coin'
        });

        // Display a notification
        // https://notifee.app/react-native/docs/android/appearance
        await notifee.displayNotification({
            title: '<p style="color: green;"><b>Styled HTMLTitle</span></p></b></p>',
            body:
                'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
            android: {
                channelId,
                sound: 'coin',
                ongoing: true,
                vibrationPattern: [300, 500],
                largeIcon: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg',
                color: '#4caf50',
                actions: [
                    {
                        title: '<b>Dance</b> 💡',
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
