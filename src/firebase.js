import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBl7Cw1lkD8pzYglLtA11vThF_0LEWCMo0",
  authDomain: "discord-clone-kabir.firebaseapp.com",
  databaseURL: "https://discord-clone-kabir.firebaseio.com",
  projectId: "discord-clone-kabir",
  storageBucket: "discord-clone-kabir.appspot.com",
  messagingSenderId: "791000113054",
  appId: "1:791000113054:web:9c3784916fd06fabe0008f",
  measurementId: "G-QGCC5G6K23"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;