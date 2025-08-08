// Setup script to create initial admin user
// Run this script once to create the first admin account

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

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
const auth = getAuth(app);
const db = getFirestore(app);

async function createAdminUser() {
  try {
    const adminData = {
      name: 'Admin User',
      studentId: 'ADMIN001',
      email: 'admin001@example.com',
      role: 'admin',
      department: 'Administration',
      password: 'admin123456'
    };

    console.log('Creating admin user...');
    
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      adminData.email, 
      adminData.password
    );

    // Update profile
    await updateProfile(userCredential.user, {
      displayName: adminData.name
    });

    // Save user data to Firestore
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      ...adminData,
      createdAt: new Date()
    });

    console.log('✅ Admin user created successfully!');
    console.log('Email:', adminData.email);
    console.log('Password:', adminData.password);
    console.log('Student ID:', adminData.studentId);
    console.log('\nYou can now login with these credentials.');
    
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
  }
}

// Run the setup
createAdminUser();
