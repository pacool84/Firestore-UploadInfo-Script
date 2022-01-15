import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAV9W-pmvNnMuoh5A0jahSorUDL-oSfqzg",
  authDomain: "react-crud-experimental.firebaseapp.com",
  databaseURL: "https://react-crud-experimental.firebaseio.com",
  projectId: "react-crud-experimental",
  storageBucket: "react-crud-experimental.appspot.com",
  messagingSenderId: "142145888806",
  appId: "1:142145888806:web:4c3848c0ebc73d840fbce7",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
