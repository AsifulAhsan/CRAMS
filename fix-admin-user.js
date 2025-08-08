// Fix admin user by adding missing Firestore data
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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

async function fixAdminUser() {
  console.log("🔧 Fixing admin user data...");

  try {
    // Login as admin to get the user ID
    const adminCredential = await signInWithEmailAndPassword(
      auth,
      "admin001@example.com",
      "admin123456"
    );

    console.log("✅ Admin login successful!");
    console.log("User ID:", adminCredential.user.uid);

    // Create the admin user document in Firestore
    const adminData = {
      name: "Admin User",
      studentId: "ADMIN001",
      email: "admin001@example.com",
      role: "admin",
      department: "Administration",
      createdAt: new Date(),
    };

    await setDoc(doc(db, "users", adminCredential.user.uid), adminData);

    console.log("✅ Admin user document created in Firestore!");
    console.log("Admin data:", adminData);
    console.log("\n🎉 Admin user is now properly configured!");
    console.log("You can now login with:");
    console.log("- Student ID: ADMIN001");
    console.log("- Password: admin123456");
    console.log("- Role: admin");
  } catch (error) {
    console.error("❌ Error fixing admin user:", error.message);

    if (error.message.includes("offline")) {
      console.log("\n💡 Firestore is still not enabled!");
      console.log(
        "Please enable Firestore Database in Firebase Console first."
      );
      console.log(
        "Go to: https://console.firebase.google.com/project/authentiq-c83a0/firestore"
      );
    }
  }
}

// Run the fix
fixAdminUser();
