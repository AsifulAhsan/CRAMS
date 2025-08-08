// Test Firebase connection and diagnose issues
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  enableNetwork,
  disableNetwork,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANsKsWOuYwEP9K8lVGZxfV2tI6QwJcD08",
  authDomain: "authentiq-c83a0.firebaseapp.com",
  projectId: "authentiq-c83a0",
  storageBucket: "authentiq-c83a0.firebasestorage.app",
  messagingSenderId: "653310487132",
  appId: "1:653310487132:web:50852e7b76518188c01499",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function testFirebaseConnection() {
  console.log("🔍 Testing Firebase connection...");

  try {
    // Test 1: Check if we can connect to Firestore
    console.log("1. Testing Firestore connection...");

    // Enable network explicitly
    await enableNetwork(db);
    console.log("✅ Network enabled");

    // Try to get a collection
    const usersCollection = collection(db, "users");
    const snapshot = await getDocs(usersCollection);
    console.log("✅ Firestore connection successful");
    console.log(`📊 Found ${snapshot.size} users in database`);

    // Test 2: Check Authentication
    console.log("2. Testing Authentication...");
    const userCredential = await signInAnonymously(auth);
    console.log("✅ Authentication working");
    console.log("User ID:", userCredential.user.uid);

    console.log("\n🎉 All Firebase services are working correctly!");
  } catch (error) {
    console.error("❌ Firebase connection failed:", error.message);
    console.error("Error code:", error.code);

    if (error.code === "permission-denied") {
      console.log("\n💡 Solution: Update Firestore security rules to:");
      console.log(`
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
      `);
    } else if (error.code === "unavailable") {
      console.log(
        "\n💡 Solution: Check your internet connection and Firebase project status"
      );
    } else if (error.message.includes("API has not been used")) {
      console.log(
        "\n💡 Solution: Enable Firestore Database in Firebase Console"
      );
      console.log(
        "Go to: https://console.firebase.google.com/project/authentiq-c83a0/firestore"
      );
    }
  }
}

// Run the test
testFirebaseConnection();
