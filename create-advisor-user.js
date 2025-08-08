// Create advisor user for testing
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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

async function createAdvisorUser() {
  try {
    const advisorData = {
      name: "Test Advisor",
      studentId: "ADVISOR001",
      email: "advisor001@example.com",
      role: "advisor",
      department: "Computer Science",
      password: "advisor123456",
    };

    console.log("Creating advisor user...");

    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      advisorData.email,
      advisorData.password
    );

    // Update profile
    await updateProfile(userCredential.user, {
      displayName: advisorData.name,
    });

    // Save user data to Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      ...advisorData,
      createdAt: new Date(),
    });

    console.log("✅ Advisor user created successfully!");
    console.log("Student ID:", advisorData.studentId);
    console.log("Password:", advisorData.password);
    console.log("Email:", advisorData.email);
    console.log("Role:", advisorData.role);
    console.log("\nYou can now login with these credentials.");

  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.log("✅ Advisor user already exists!");
      console.log("Student ID: ADVISOR001");
      console.log("Password: advisor123456");
      console.log("Email: advisor001@example.com");
      console.log("Role: advisor");
    } else {
      console.error("❌ Error creating advisor user:", error.message);
    }
  }
}

// Run the setup
createAdvisorUser();
