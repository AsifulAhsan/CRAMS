# IIUC CRAMS - Course Registration and Management System

A full-stack React application with Firebase integration for managing student course registrations, advisor assignments, and administrative functions.

## Features

- 🔐 **Firebase Authentication** - Secure login system with role-based access
- 👥 **User Management** - Admins can create and manage user accounts
- 🎓 **Student Portal** - Course registration and academic history
- 👨‍🏫 **Advisor Panel** - Manage student advising and course assignments
- 🛠️ **Admin Dashboard** - Complete system administration
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore)
- **Authentication**: Firebase Auth with role-based access control
- **Database**: Firestore (NoSQL)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase project (already configured)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CRAMS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - The Firebase configuration is already set up in `src/firebase/config.js`
   - Make sure your Firebase project has Authentication and Firestore enabled

4. **Create initial admin user**
   ```bash
   npm run setup-admin
   ```
   This will create an admin user with the following credentials:
   - **Email**: admin001@example.com
   - **Password**: admin123456
   - **Student ID**: ADMIN001

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## User Roles and Access

### Admin
- **Access**: `/admin` and `/admin/users`
- **Features**:
  - Create and manage user accounts
  - Assign courses to semesters
  - Assign advisors to students
  - View all system data

### Advisor
- **Access**: `/advisor`
- **Features**:
  - View assigned students
  - Manage course registrations
  - Provide academic guidance

### Student
- **Access**: `/` (main dashboard)
- **Features**:
  - View course offerings
  - Register for courses
  - View academic history
  - Access advisor notes

## Login Instructions

1. **For Students**: Use your Student ID (e.g., C231304) and password
2. **For Admins**: Use the admin credentials created during setup
3. **For Advisors**: Use credentials provided by admin

## Creating New Users

### Admin can create users through the User Management panel:

1. Login as admin
2. Navigate to "User Manage" in the admin panel
3. Click "Create User" button
4. Fill in the user details:
   - **Full Name**: User's complete name
   - **Student ID**: Unique identifier (e.g., C231304)
   - **Role**: Student, Advisor, or Admin
   - **Department**: User's department
   - **Password**: Leave empty for default password (defaultPassword123)

### Default Login Format:
- **Email**: `{studentId}@example.com`
- **Password**: As set during creation or default password

## Project Structure

```
src/
├── components/
│   ├── Auth/           # Authentication components
│   ├── AdminPage/      # Admin dashboard and user management
│   ├── Advisor/        # Advisor panel components
│   ├── StudentDashboard/ # Student portal
│   └── ...
├── contexts/
│   └── AuthContext.jsx # Authentication context
├── firebase/
│   └── config.js       # Firebase configuration
└── ...
```

## Firebase Collections

### Users Collection
```javascript
{
  uid: "user_id",
  name: "Full Name",
  studentId: "C231304",
  email: "c231304@example.com",
  role: "student|advisor|admin",
  department: "Computer Science",
  createdAt: Timestamp
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run setup-admin` - Create initial admin user
- `npm run lint` - Run ESLint

## Security Features

- Role-based access control
- Protected routes
- Firebase Authentication
- Secure password handling
- Session management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.
