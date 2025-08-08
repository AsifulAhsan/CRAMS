import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc, enableNetwork } from "firebase/firestore";
import { auth, db } from "../firebase/config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const [error, setError] = useState(null);

  async function signup(email, password, userData) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update profile with display name
      await updateProfile(userCredential.user, {
        displayName: userData.name || userData.studentId,
      });

      // Save additional user data to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        ...userData,
        email,
        createdAt: new Date(),
        role: userData.role || "student",
      });

      return userCredential;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  }

  async function login(email, password) {
    try {
      console.log("Attempting login with:", email);
      
      // Enable network connection
      await enableNetwork(db);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Login successful, fetching user role...");

      // Fetch user role from Firestore immediately
      try {
        const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
        if (userDoc.exists()) {
          const role = userDoc.data().role;
          setUserRole(role);
          console.log("User role set to:", role);
        } else {
          console.warn("User document not found in Firestore");
          // Set default role if document doesn't exist
          setUserRole("student");
        }
      } catch (firestoreError) {
        console.error(
          "Error fetching user role from Firestore:",
          firestoreError
        );
        // Set default role if Firestore is unavailable
        setUserRole("student");
      }

      return userCredential;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  function logout() {
    setUserRole(null);
    return signOut(auth);
  }

  async function createUserAccount(userData) {
    try {
      const email = `${userData.studentId}@example.com`;
      const password = userData.password || "defaultPassword123";

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update profile
      await updateProfile(userCredential.user, {
        displayName: userData.name,
      });

      // Save user data to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        ...userData,
        email,
        createdAt: new Date(),
        role: userData.role || "student",
      });

      return userCredential;
    } catch (error) {
      console.error("Create user error:", error);
      throw error;
    }
  }

  useEffect(() => {
    console.log("AuthProvider: Setting up auth state listener...");
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        console.log("Auth state changed:", user ? "User logged in" : "No user");
        
        if (user) {
          setCurrentUser(user);
          console.log("Fetching user role from Firestore...");
          
          // Fetch user role from Firestore
          try {
            await enableNetwork(db);
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
              const role = userDoc.data().role;
              setUserRole(role);
              console.log("User role loaded:", role);
            } else {
              console.warn("User document not found in Firestore");
              setUserRole("student");
            }
          } catch (error) {
            console.error("Error fetching user role:", error);
            setUserRole("student");
          }
        } else {
          setCurrentUser(null);
          setUserRole(null);
        }
      } catch (error) {
        console.error("Auth state change error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    });

    // Add a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      console.log("AuthProvider: Loading timeout reached");
      setLoading(false);
    }, 5000);

    return () => {
      console.log("AuthProvider: Cleaning up...");
      unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  const value = {
    currentUser,
    userRole,
    loading,
    error,
    signup,
    login,
    logout,
    createUserAccount,
  };

  console.log("AuthProvider: Rendering with state:", { 
    currentUser: !!currentUser, 
    userRole, 
    loading, 
    error 
  });

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
