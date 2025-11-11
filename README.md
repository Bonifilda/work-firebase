# Firebase CRUD Task App

A protected:task manager built with,Next.js 14 (App Router),TypeScript, Firebase Authentication, and Firestore.  
Only logged-in users can create, read, update, and delete their owntasks.
 Technologies Used
- Next.js (App Router)
- TypeScript
- Firebase Authentication (Email/Password)
- Firestore (real-time database)
- Tailwind CSS (styling)
Features

| Feature | Description |
---------------------|
Firebase Authentication: Register & login with email/password. Logout button available. |
Protected Routes:(dashboard) and `/tasks/[id]` only accessible when logged in. Unauthorized users are redirected to `/login`. |
CRUD Operations Add, edit, toggle complete, delete tasks – all synced in real time. |
Personalized Dashboard Greeting :`Hello, testuser@gmail.com` (or current user’s email). |
 Setup Instructions

1Clone the repository  
   
   git clone https://github.com/Bonifilda/work-firebase.git
   cd work-firebase
