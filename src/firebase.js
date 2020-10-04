import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAymkpi824dlJukemnJh4y8wWf69kufnzw",
  authDomain: "localb-735e3.firebaseapp.com",
  databaseURL: "https://localb-735e3.firebaseio.com",
  projectId: "localb-735e3",
  storageBucket: "localb-735e3.appspot.com",
  messagingSenderId: "266399374067",
  appId: "1:266399374067:web:192a171bda1eb74a93f586",
  measurementId: "G-PXZ71WWD3B"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;