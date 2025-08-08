// Check and create users if needed
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
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

async function checkUsers() {
  console.log("🔍 Checking users in database...");

  try {
    // Try to get users collection
    const usersCollection = collection(db, "users");
    const snapshot = await getDocs(usersCollection);

    console.log(`📊 Found ${snapshot.size} users in database`);

    if (snapshot.size === 0) {
      console.log("❌ No users found! You need to:");
      console.log("1. Enable Firestore Database in Firebase Console");
      console.log("2. Run: npm run setup-admin");
      console.log("3. Run: npm run create-test-user");
    } else {
      console.log("✅ Users found:");
      snapshot.forEach((doc) => {
        const userData = doc.data();
        console.log(
          `- ${userData.name} (${userData.studentId}) - Role: ${userData.role}`
        );
      });
    }

    // Test admin login
    console.log("\n🔐 Testing admin login...");
    try {
      const adminCredential = await signInWithEmailAndPassword(
        auth,
        "admin001@example.com",
        "admin123456"
      );
      console.log("✅ Admin login successful!");
      console.log("User ID:", adminCredential.user.uid);

      // Check admin user document
      const adminDoc = await getDoc(doc(db, "users", adminCredential.user.uid));
      if (adminDoc.exists()) {
        const adminData = adminDoc.data();
        console.log("Admin role:", adminData.role);
        console.log("Admin name:", adminData.name);
      }
    } catch (error) {
      console.log("❌ Admin login failed:", error.message);
    }
  } catch (error) {
    console.error("❌ Error checking users:", error.message);
    console.log(
      "\n💡 You need to enable Firestore Database in Firebase Console"
    );
    console.log(
      "Go to: https://console.firebase.google.com/project/authentiq-c83a0/firestore"
    );
  }
}

// Run the check
checkUsers();
