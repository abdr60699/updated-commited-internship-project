import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDvNhWPpKLfAppiFsIVOq3cKMoutt4kfeQ",
  authDomain: "hello-world-3649d.firebaseapp.com",
  databaseURL: "https://hello-world-3649d-default-rtdb.firebaseio.com",
  projectId: "hello-world-3649d",
  storageBucket: "hello-world-3649d.appspot.com",
  messagingSenderId: "597762679310",
  appId: "1:597762679310:web:8d1718606b06b6690d925f"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;