import firebase from 'firebase/app';
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCg8kvpCI879ICIoVIrwMzAboMQAwEVzeY",
  authDomain: "leaderboard-ecb3b.firebaseapp.com",
  databaseURL: "https://leaderboard-ecb3b.firebaseio.com",
  projectId: "leaderboard-ecb3b",
  storageBucket: "leaderboard-ecb3b.appspot.com",
  messagingSenderId: "389134800222"
};

firebase.initializeApp(config);

export default firebase;
