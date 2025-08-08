// Robust user creation script with better error handling
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc, enableNetwork } from "firebase/firestore";

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

async function createUserRobust() {
  console.log("🔧 Creating user with robust error handling...");
  
  try {
    // Enable network connection first
    await enableNetwork(db);
    console.log("✅ Network enabled");
    
    const userData = {
      name: "Test User",
      studentId: "TEST001",
      email: "test001@example.com",
      role: "student",
      department: "Computer Science",
      password: "test123456",
    };

    console.log("📝 Creating user:", userData.name);
    console.log("📧 Email:", userData.email);
    console.log("🎭 Role:", userData.role);

    // Step 1: Create user in Firebase Auth
    console.log("Step 1: Creating user in Firebase Auth...");
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    console.log("✅ User created in Firebase Auth");
    console.log("User ID:", userCredential.user.uid);

    // Step 2: Update profile
    console.log("Step 2: Updating user profile...");
    await updateProfile(userCredential.user, {
      displayName: userData.name,
    });
    console.log("✅ Profile updated");

    // Step 3: Save to Firestore
    console.log("Step 3: Saving user data to Firestore...");
    const userDocRef = doc(db, "users", userCredential.user.uid);
    
    const firestoreData = {
      name: userData.name,
      studentId: userData.studentId,
      email: userData.email,
      role: userData.role,
      department: userData.department,
      createdAt: new Date(),
    };
    
    await setDoc(userDocRef, firestoreData);
    console.log("✅ User data saved to Firestore");

    console.log("\n🎉 User created successfully!");
    console.log("📋 User Details:");
    console.log("- Name:", userData.name);
    console.log("- Student ID:", userData.studentId);
    console.log("- Email:", userData.email);
    console.log("- Role:", userData.role);
    console.log("- Password:", userData.password);
    console.log("- User ID:", userCredential.user.uid);

  } catch (error) {
    console.error("❌ Error creating user:", error.message);
    console.error("Error code:", error.code);
    
    if (error.code === "auth/email-already-in-use") {
      console.log("💡 User already exists with this email");
    } else if (error.code === "auth/weak-password") {
      console.log("💡 Password is too weak (should be at least 6 characters)");
    } else if (error.code === "auth/invalid-email") {
      console.log("💡 Invalid email format");
    } else if (error.message.includes("INTERNAL ASSERTION FAILED")) {
      console.log("💡 Firebase internal error - try again or check Firebase console");
    } else if (error.message.includes("offline")) {
      console.log("💡 Firestore is offline - check your internet connection");
    } else {
      console.log("💡 Unknown error - check Firebase console and try again");
    }
  }
}

// Run the function
createUserRobust();
