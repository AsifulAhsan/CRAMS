// Script to help enable Firestore API
console.log("🔧 Firebase Firestore Setup Instructions");
console.log("=====================================\n");

console.log("1. Go to Firebase Console:");
console.log("   https://console.firebase.google.com/project/authentiq-c83a0\n");

console.log("2. Enable Firestore Database:");
console.log('   - Click "Firestore Database" in the left sidebar');
console.log('   - Click "Create Database"');
console.log('   - Choose "Start in test mode"');
console.log("   - Select a location (choose closest to your users)");
console.log('   - Click "Done"\n');

console.log("3. Enable Authentication:");
console.log('   - Click "Authentication" in the left sidebar');
console.log('   - Click "Get started"');
console.log('   - Go to "Sign-in method" tab');
console.log('   - Enable "Email/Password" provider');
console.log('   - Click "Save"\n');

console.log("4. Set Firestore Security Rules:");
console.log('   - In Firestore Database, go to "Rules" tab');
console.log("   - Replace with this (for development):");
console.log(`
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
`);
console.log('   - Click "Publish"\n');

console.log("5. Enable Firestore API (if needed):");
console.log(
  "   - Go to: https://console.developers.google.com/apis/api/firestore.googleapis.com/overview?project=authentiq-c83a0"
);
console.log('   - Click "Enable"\n');

console.log("6. Test the connection:");
console.log("   npm run test-connection\n");

console.log("7. Create admin user:");
console.log("   npm run setup-admin\n");

console.log("8. Start the application:");
console.log("   npm run dev\n");

console.log(
  "✅ After completing these steps, your Firebase setup should work correctly!"
);
