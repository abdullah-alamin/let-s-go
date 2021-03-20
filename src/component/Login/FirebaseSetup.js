import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAGD1X1zQtDsB3Md-VK_mtIhcdDaIl66zI",
    authDomain: "let-s-go-82cf0.firebaseapp.com",
    projectId: "let-s-go-82cf0",
    storageBucket: "let-s-go-82cf0.appspot.com",
    messagingSenderId: "848565824909",
    appId: "1:848565824909:web:2901c735bdda4b2ad161c4"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;