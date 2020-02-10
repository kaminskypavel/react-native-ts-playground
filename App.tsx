import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import notifee, {EventType} from '@notifee/react-native';

notifee.onForegroundEvent(async ({type, detail}) => {
    if (type === EventType.ACTION_PRESS && detail.pressAction.id) {
        console.log('User pressed an action with the id: ', JSON.stringify(detail));
        //{
        // 	"input": "Blaaaah",
        // 	"pressAction": {
        // 		"id": "reply"
        // 	},
        //  .....
        // }
        await notifee.cancelNotification(detail.notification.id);
        await notifee.cancelAllNotifications();

    }
});


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
                // ongoing: true,
                vibrationPattern: [300, 500],
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
                    },
                    {
                        title: '<p style="color: #f44336;"><b>Dismiss</b> ✈</p>',
                        pressAction: {id: 'dismiss'},
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
