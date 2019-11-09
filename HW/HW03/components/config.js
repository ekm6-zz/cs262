import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC90hIRcsS1q2DkmG5Xee82mV81NsCRfRE",
  authDomain: "cs262-hw3.firebaseapp.com",
  databaseURL: "https://cs262-hw3.firebaseio.com",
  projectId: "cs262-hw3",
  storageBucket: "cs262-hw3.appspot.com",
  messagingSenderId: "200122457687",
  appId: "1:200122457687:web:c0573f6c8f01592f9a0d12"
};

if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}

export const db = Firebase.database();
