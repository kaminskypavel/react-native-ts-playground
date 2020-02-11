const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const sendTestNotification = async (timeout) => new Promise(res => {
        setTimeout(() => {
            console.log('done in', timeout);
            res();
        }, timeout * 1000)
    }
);

exports.pushToTest = functions.https.onRequest(async (request, response) => {
    const {timeout} = request.query;
    response.send(`notification will be sent in ${timeout}s`)
    await sendTestNotification(timeout);
});
