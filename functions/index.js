const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

//https://console.firebase.google.com/u/0/project/drive-shield/functions/logs
const sendTestNotification = async (timeout) => new Promise(res => {
        setTimeout(async () => {

            const userRef = await admin
                .firestore()
                .collection("users")
                .doc(`test-user`)
                .get()

            const {token, notification} = userRef.data();
            console.log('sending', token, notification);
            const response = await admin.messaging().sendToDevice(token, {
                notification
            });

            console.log('fcm response', response);
            res();
        }, timeout * 1000)
    }
);

exports.pushToTest = functions.https.onCall(async (data, context) => {
    const {timeout = 0} = data.timeout;
    await sendTestNotification(timeout);
    return {status: "ok", timeout}
});
