import {AppRegistry} from 'react-native';
import App, {onMessageReceived} from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';



messaging().onMessage(async (message) => {
    console.log(`onMessage`, message.data);
    await onMessageReceived(message);
});

messaging().setBackgroundMessageHandler(async (message) => {
    console.log(`background`, message.data);
    await onMessageReceived(message);
});


AppRegistry.registerComponent(appName, () => App);
