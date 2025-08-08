// Create a new student user for testing
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

async function createNewStudent() {
  try {
    const studentData = {
      name: "New Test Student",
      studentId: "C231305",
      email: "c231305@example.com",
      role: "student",
      department: "Computer Science",
      password: "student123456",
    };

    console.log("Creating new student user...");

    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      studentData.email,
      studentData.password
    );

    // Update profile
    await updateProfile(userCredential.user, {
      displayName: studentData.name,
    });

    // Save user data to Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      ...studentData,
      createdAt: new Date(),
    });

    console.log("✅ New student user created successfully!");
    console.log("Student ID:", studentData.studentId);
    console.log("Password:", studentData.password);
    console.log("Email:", studentData.email);
    console.log("Role:", studentData.role);
    console.log("\nYou can now login with these credentials.");

  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.log("✅ Student user already exists!");
      console.log("Student ID: C231305");
      console.log("Password: student123456");
      console.log("Email: c231305@example.com");
      console.log("Role: student");
    } else {
      console.error("❌ Error creating student user:", error.message);
    }
  }
}

// Run the setup
createNewStudent();
