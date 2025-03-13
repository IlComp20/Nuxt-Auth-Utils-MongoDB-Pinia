<p align="center">
  <a href="https://github.com/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License"/>
  </a>
</p>

# Nuxt 3 Authentication Template with nuxt-auth-utils, MongoDB, and Pinia

This project provides a template for building a Nuxt 3 application with authentication via nuxt-auth-utils (specifically Google login), a MongoDB backend, and Pinia for state management. It includes features for dark mode and a responsive navigation bar.

## Features

* **Authentication with nuxt-auth-utils**: Implements secure Google login using the nuxt-auth-utils module.
* **MongoDB Integration**: Persistent user data storage using MongoDB.
* **Pinia State Management**: Efficient and type-safe state management with Pinia.
* **Nuxt UI**: Leverages the Nuxt UI component library for consistent and beautiful interfaces.
* **Dark Mode Support**: Easily switch between light and dark themes.
* **Responsive Navigation Bar**: A clean and responsive navigation bar for a great user experience.
* **Tailwind CSS Styling**: Uses Tailwind CSS for rapid UI development.

## Getting Started

### Prerequisites
* Node.js and npm (or yarn)
* MongoDB instance running locally (or adjust connection string in `database/database.js`)
* A Google Cloud Platform project with OAuth credentials configured (see Google's documentation)
* Nuxt UI installed (included in the dependencies)

### Installation
1. Clone the repository:
   ```
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```
   cd <project_directory>
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables: Create a `.env` file in the root directory with the following variables:
   ```
   NUXT_SESSION_PASSWORD=password-with-at-least-32-characters
   MONGODB_URI=your_mongodb_connection_string
   NUXT_OAUTH_GOOGLE_CLIENT_ID=your_google_client_id
   NUXT_OAUTH_GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
   You'll need to get your Google OAuth credentials from the Google Cloud Platform console.

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser to see the application.

### Deployment (Example)
For deployment, you will need to build the application and then deploy the build artifacts. The deployment method will depend on your hosting provider. Here's an example using Vercel:

```
npm run build
npm run preview
```

## Project Structure

- **app/**: Contains the Nuxt application code.
- **server/api/auth/google.get.js**: Handles Google authentication with nuxt-auth-utils, manages user creation/lookup in MongoDB, and session management.
- **stores/user.js**: Pinia store that manages user state with cookie persistence (7-day lifespan) and provides login/logout functionality.
- **components/navbar/Navbar.vue**: Responsive navigation component.
- **database/database.js**: MongoDB connection utilities.
- **models/User.js**: Mongoose schema for user data.
- **tailwind.config.ts**: Tailwind configuration with dark mode support and custom theming.
- **package.json**: Project dependencies and scripts.
