# Login Credentials

## Admin User
- **Student ID**: `ADMIN001`
- **Password**: `admin123456`
- **Email**: `admin001@example.com`
- **Role**: Admin
- **Access**: `/admin` and `/admin/users`
- **Expected Redirect**: `/admin` (Admin Panel)

## Test Student User
- **Student ID**: `C231305`
- **Password**: `student123456`
- **Email**: `c231305@example.com`
- **Role**: Student
- **Access**: `/` (main dashboard)
- **Expected Redirect**: `/` (Student Dashboard)

## Test Advisor User
- **Student ID**: `ADVISOR001`
- **Password**: `advisor123456`
- **Email**: `advisor001@example.com`
- **Role**: Advisor
- **Access**: `/advisor`
- **Expected Redirect**: `/advisor` (Advisor Panel)

## How to Login

1. Go to `http://localhost:5173/login`
2. Enter the **Student ID** (not email) in the first field
3. Enter the **Password** in the second field
4. Click "Login"
5. You will be automatically redirected to your appropriate panel based on your role

## 🎯 **Expected Redirects After Login**

- **Admin users** → `/admin` (Admin Panel)
- **Student users** → `/` (Student Dashboard)
- **Advisor users** → `/advisor` (Advisor Panel)

## 🔧 **FIXING ADMIN REDIRECT ISSUE**

If admin users are being redirected to the student panel instead of the admin panel, follow these steps:

### **Step 1: Enable Firestore Database**

1. Go to [Firebase Console](https://console.firebase.google.com/project/authentiq-c83a0)
2. Click **"Firestore Database"** in the left sidebar
3. Click **"Create Database"**
4. Choose **"Start in test mode"**
5. Select a location (choose closest to your users)
6. Click **"Done"**

### **Step 2: Set Security Rules**

1. In Firestore Database, go to **"Rules"** tab
2. Replace with this (for development):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Click **"Publish"**

### **Step 3: Fix Admin User**

Run this command to add the missing admin user data:

```bash
npm run fix-admin
```

### **Step 4: Create All Test Users**

Run these commands to create all test users:

```bash
npm run create-advisor
npm run test-all-users
```

### **Step 5: Test**

1. Start the application: `npm run dev`
2. Test each user type:
   - **Admin**: `ADMIN001` / `admin123456` → should redirect to `/admin`
   - **Student**: `C231305` / `student123456` → should redirect to `/`
   - **Advisor**: `ADVISOR001` / `advisor123456` → should redirect to `/advisor`

## Creating New Users (Admin Only)

1. Login as admin using the credentials above
2. Navigate to "User Manage" in the admin panel
3. Click "Create User" button
4. Fill in the user details:
   - **Full Name**: User's complete name
   - **Student ID**: Unique identifier (e.g., C231304)
   - **Role**: Student, Advisor, or Admin
   - **Department**: User's department
   - **Password**: Leave empty for default password (defaultPassword123)

## Default Login Format for New Users

- **Email**: `{studentId}@example.com`
- **Password**: As set during creation or `defaultPassword123`

## Available Commands

- `npm run dev` - Start development server
- `npm run fix-admin` - Fix admin user data
- `npm run create-advisor` - Create advisor user
- `npm run test-all-users` - Test all user types
- `npm run setup-admin` - Create new admin user
- `npm run create-test-user` - Create test student user

## Troubleshooting

### **"auth/invalid-credential" error:**

1. Make sure you're using the correct Student ID (not email)
2. Check that the password is correct
3. Ensure the user exists in Firebase (created by admin)
4. Verify Firebase Authentication and Firestore are enabled

### **"Failed to get document because the client is offline" error:**

1. Enable Firestore Database in Firebase Console
2. Set proper security rules
3. Run `npm run fix-admin` to create missing user data

### **Admin redirecting to student panel:**

1. Follow the "FIXING ADMIN REDIRECT ISSUE" steps above
2. Ensure Firestore is enabled and admin user data exists
3. Check that the admin user has `role: 'admin'` in Firestore

### **Wrong redirect for any user type:**

1. Run `npm run test-all-users` to check user configurations
2. Ensure Firestore is enabled and user data exists
3. Check that each user has the correct `role` in Firestore
