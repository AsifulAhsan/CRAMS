// Test all user types and ensure proper role configuration
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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

async function testAllUsers() {
  console.log("🧪 Testing all user types...\n");

  const users = [
    {
      name: "Admin User",
      studentId: "ADMIN001",
      email: "admin001@example.com",
      password: "admin123456",
      role: "admin",
      department: "Administration",
    },
    {
      name: "New Test Student",
      studentId: "C231305",
      email: "c231305@example.com",
      password: "student123456",
      role: "student",
      department: "Computer Science",
    },
    {
      name: "Test Advisor",
      studentId: "ADVISOR001",
      email: "advisor001@example.com",
      password: "advisor123456",
      role: "advisor",
      department: "Computer Science",
    },
  ];

  for (const user of users) {
    console.log(`🔍 Testing ${user.role} user: ${user.name}`);

    try {
      // Test login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(`✅ ${user.role} login successful!`);
      console.log(`   User ID: ${userCredential.user.uid}`);

      // Check if user document exists in Firestore
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log(`✅ ${user.role} document exists in Firestore`);
        console.log(`   Role: ${userData.role}`);
        console.log(`   Name: ${userData.name}`);
        console.log(`   Department: ${userData.department}`);

        // Verify role matches
        if (userData.role === user.role) {
          console.log(`✅ Role verification: PASSED`);
        } else {
          console.log(
            `❌ Role verification: FAILED (expected ${user.role}, got ${userData.role})`
          );
        }
      } else {
        console.log(`❌ ${user.role} document missing in Firestore`);
        console.log(`   Creating missing document...`);

        // Create the missing document
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name: user.name,
          studentId: user.studentId,
          email: user.email,
          role: user.role,
          department: user.department,
          createdAt: new Date(),
        });
        console.log(`✅ ${user.role} document created successfully!`);
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        console.log(`❌ ${user.role} user not found in Authentication`);
        console.log(`   You need to create this user first`);
      } else if (error.code === "auth/wrong-password") {
        console.log(`❌ ${user.role} wrong password`);
      } else {
        console.log(`❌ ${user.role} error: ${error.message}`);
      }
    }

    console.log(""); // Empty line for readability
  }

  console.log("🎯 Expected redirects after login:");
  console.log("- Admin users → /admin");
  console.log("- Student users → /");
  console.log("- Advisor users → /advisor");
  console.log("\n✅ Test completed!");
}

// Run the test
testAllUsers();
