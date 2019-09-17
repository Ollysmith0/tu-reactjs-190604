import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD0M2sMO6dDlHaur7mVYW48Kpf5Px3B8PQ",
    authDomain: "tu-reactjs-190604.firebaseapp.com",
    databaseURL: "https://tu-reactjs-190604.firebaseio.com",
    projectId: "tu-reactjs-190604",
    storageBucket: "",
    messagingSenderId: "916495284792",
    appId: "1:916495284792:web:03f2e1bbeb67a698e404cd"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp