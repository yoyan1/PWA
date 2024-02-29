<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUJopZzEKxsySBYhA_IyVzxUaaVCYRv3A",
  authDomain: "vue-firebase-crud-a2046.firebaseapp.com",
  projectId: "vue-firebase-crud-a2046",
  storageBucket: "vue-firebase-crud-a2046.appspot.com",
  messagingSenderId: "1094365634516",
  appId: "1:1094365634516:web:b0e62ffae04b11e6c2c041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <p>{{ token }}</p>
    </div>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
