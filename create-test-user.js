// Create a test student user for testing
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
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

async function createTestUser() {
  try {
    const testUserData = {
      name: "Test Student",
      studentId: "C231304",
      email: "c231304@example.com",
      role: "student",
      department: "Computer Science",
      password: "test123456",
    };

    console.log("Creating test student user...");

    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      testUserData.email,
      testUserData.password
    );

    // Update profile
    await updateProfile(userCredential.user, {
      displayName: testUserData.name,
    });

    // Save user data to Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      ...testUserData,
      createdAt: new Date(),
    });

    console.log("✅ Test student user created successfully!");
    console.log("Student ID:", testUserData.studentId);
    console.log("Password:", testUserData.password);
    console.log("Email:", testUserData.email);
    console.log("\nYou can now login with these credentials.");
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.log("✅ Test user already exists!");
      console.log("Student ID: C231304");
      console.log("Password: test123456");
      console.log("Email: c231304@example.com");
    } else {
      console.error("❌ Error creating test user:", error.message);
    }
  }
}

// Run the setup
createTestUser();
