import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import App from "./src/App";
import {onMessageReceived} from "./src/Screens/Notifications";



messaging().onMessage(async (message) => {
    console.log(`onMessage`, message.data);
    await onMessageReceived(message);
});

messaging().setBackgroundMessageHandler(async (message) => {
    console.log(`background`, message.data);
    await onMessageReceived(message);
});


AppRegistry.registerComponent(appName, () => App);
