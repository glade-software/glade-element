const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.addUserToFirestore = functions.auth.user().onCreate(async (user) => {
    try {
        await db.collection('users').doc(user.uid).set({displayName: ''});
    } catch (error) {
        console.log('error persisting user to firestore:\n', error);
    }
});