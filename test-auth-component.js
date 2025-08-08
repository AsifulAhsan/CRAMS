// Test script for the new authentication component
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, enableNetwork } from "firebase/firestore";

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

async function testNewAuthComponent() {
  console.log("🧪 Testing new Authentication component...");
  
  const testUsers = [
    {
      name: "Admin User",
      email: "admin001@example.com",
      password: "admin123456",
      expectedRole: "admin",
      expectedRedirect: "/admin"
    },
    {
      name: "New Test Student",
      email: "c231305@example.com", 
      password: "student123456",
      expectedRole: "student",
      expectedRedirect: "/"
    },
    {
      name: "Test Advisor",
      email: "advisor001@example.com",
      password: "advisor123456", 
      expectedRole: "advisor",
      expectedRedirect: "/advisor"
    }
  ];

  for (const user of testUsers) {
    console.log(`\n🔍 Testing ${user.name}...`);
    
    try {
      // Enable network connection
      await enableNetwork(db);
      
      // Test login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      
      console.log(`✅ Login successful for ${user.name}`);
      console.log(`   User ID: ${userCredential.user.uid}`);
      
      // Test role verification
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      if (userDoc.exists()) {
        const role = userDoc.data().role;
        console.log(`   Role: ${role}`);
        console.log(`   Expected: ${user.expectedRole}`);
        console.log(`   Expected Redirect: ${user.expectedRedirect}`);
        
        if (role === user.expectedRole) {
          console.log(`✅ Role verification: PASSED`);
        } else {
          console.log(`❌ Role verification: FAILED`);
        }
      } else {
        console.log(`❌ User document not found in Firestore`);
      }
      
    } catch (error) {
      console.error(`❌ Error testing ${user.name}:`, error.message);
    }
  }
  
  console.log("\n🎯 New Authentication Component Features:");
  console.log("- Beautiful UI with IIUC branding");
  console.log("- Supports both email and student ID login");
  console.log("- Real-time form validation");
  console.log("- Loading states and error handling");
  console.log("- Automatic role-based redirects");
  console.log("- Responsive design");
  
  console.log("\n✅ Test completed!");
}

// Run the test
testNewAuthComponent();
