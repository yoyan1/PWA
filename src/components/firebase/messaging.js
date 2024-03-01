import {ref} from 'vue'
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import {app} from './firebase'
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

let token = ref("")

getToken(messaging, { vapidKey: 'BCwF-aal4fPHKywxKkLFVK22BTkqZnmLNMP6tsi9DdX2MpSgJdUBT5gyKwqD30dX-uQIPFYVuleA6qepcqjav24' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    token.value = currentToken
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

export {token}