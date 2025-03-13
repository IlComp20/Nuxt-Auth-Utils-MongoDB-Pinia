[![License][license-src]][license-href]
![Nuxt.js](https://img.shields.io/badge/Nuxt.js-35495E?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=fff)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFD700?style=for-the-badge&logo=pinia&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
<div align="center">

# 🔐 Nuxt 3 Authentication Template with nuxt-auth-utils, MongoDB, and Pinia

</div>

## ✨ Features

- **🔑 Autenticazione con nuxt-auth-utils**: Implementa un login sicuro con Google utilizzando il modulo nuxt-auth-utils.
- **🗄️ Integrazione con MongoDB**: Memorizzazione persistente dei dati utente utilizzando MongoDB.
- **📦 Gestione dello stato con Pinia**: Gestione efficiente e tipizzata dello stato con Pinia.
- **🧩 Nuxt UI**: Utilizzo della libreria di componenti Nuxt UI per interfacce coerenti e accattivanti.
- **🌓 Supporto alla modalità scura**: Passaggio semplice tra temi chiari e scuri.
- **📱 Barra di navigazione reattiva**: Una barra di navigazione pulita e reattiva per una migliore esperienza utente.
- **🎨 Stile con Tailwind CSS**: Utilizzo di Tailwind CSS per uno sviluppo UI rapido.


## 🚀 Getting Started

### Prerequisites
* Node.js and npm (or yarn)
* MongoDB instance running locally (or adjust connection string in `database/database.js`)
* A Google Cloud Platform project with OAuth credentials configured (see Google's documentation)
* Nuxt UI installed (included in the dependencies)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables: Create a `.env` file in the root directory with the following variables:
   ```env
   NUXT_SESSION_PASSWORD=password-with-at-least-32-characters
   MONGODB_URI=your_mongodb_connection_string
   NUXT_OAUTH_GOOGLE_CLIENT_ID=your_google_client_id
   NUXT_OAUTH_GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
   > ℹ️ You'll need to get your Google OAuth credentials from the Google Cloud Platform console.

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser to see the application.

### Deployment (Example)
For deployment, you will need to build the application and then deploy the build artifacts. The deployment method will depend on your hosting provider. Here's an example using Vercel:

```bash
npm run build
npm run preview
```

## 📂 Project Structure

- **`app/`**: Contains the Nuxt application code.
- **`server/api/auth/google.get.js`**: Handles Google authentication with nuxt-auth-utils, manages user creation/lookup in MongoDB, and session management.
- **`stores/user.js`**: Pinia store that manages user state with cookie persistence (7-day lifespan) and provides login/logout functionality.
- **`components/navbar/Navbar.vue`**: Responsive navigation component.
- **`database/database.js`**: MongoDB connection utilities.
- **`models/User.js`**: Mongoose schema for user data.
- **`tailwind.config.ts`**: Tailwind configuration with dark mode support and custom theming.
- **`package.json`**: Project dependencies and scripts.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia/blob/main/LICENSE) file for details.


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

[![GitHub stars](https://img.shields.io/github/stars/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia?style=social)](https://github.com/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia?style=social)](https://github.com/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia/network/members)
[![GitHub issues](https://img.shields.io/github/issues/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia)](https://github.com/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia)](https://github.com/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia/pulls)
[![License](https://img.shields.io/github/license/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia)](https://github.com/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia/blob/main/LICENSE)


<!-- Badges -->
[license-src]: https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge
[license-href]: https://github.com/IlComp20/Nuxt-Auth-Utils-MongoDB-Pinia/blob/main/LICENSE