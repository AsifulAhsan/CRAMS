import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANsKsWOuYwEP9K8lVGZxfV2tI6QwJcD08",
  authDomain: "authentiq-c83a0.firebaseapp.com",
  projectId: "authentiq-c83a0",
  storageBucket: "authentiq-c83a0.firebasestorage.app",
  messagingSenderId: "653310487132",
  appId: "1:653310487132:web:50852e7b76518188c01499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
