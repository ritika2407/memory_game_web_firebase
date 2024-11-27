// Firebase.js

// Initialize Firebase
function InitializeFirebase(config) {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
    console.log("Firebase Initialized");
}

// Log an event to Firebase Analytics
function LogEvent(eventName, eventParams) {
    if (firebase.analytics) {
        firebase.analytics().logEvent(eventName, eventParams);
        console.log("Event logged: ", eventName, eventParams);
    } else {
        console.error("Firebase Analytics not available");
    }
}
