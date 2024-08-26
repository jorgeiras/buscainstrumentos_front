# BuscaInstrumentos Frontend

### Description
This repository contains the frontend application for the BuscaInstrumentos project. Built with React and Vite, it provides a user-friendly interface for searching and browsing musical instruments. The application interacts with the backend service to display data scraped from various online sources.

### Table of Contents
1. [Technical Stack](#technical-stack)
2. [Features](#features)
3. [Deployment](#deployment)
4. [CI/CD Workflow](#cicd-workflow)
5. [Contact](#contact)

### Technical Stack
The frontend of the BuscaInstrumentos project utilizes the following technologies and tools:
- **Framework**: React, used as the core library for building the user interface.
- **Bundler**: Vite, employed for its fast and efficient development and build process.
- **Styling**: Tailwind CSS, for a utility-first approach to styling, enabling responsive design.
- **Routing**: React Router, for managing navigation between different pages.
- **State Management**: React's state management capabilities, particularly using hooks like `useState`.
- **API Integration**: The application interacts with the backend API using `axios`.

### Features
The frontend application provides the following key features:

- **Search Functionality**:
  - **Input Search Component** (`InputSearch.jsx`): Allows users to search for instruments by name.
  - **Header Component** (`HeaderComp.jsx`): Includes the application logo and search functionality.

- **Navigation and Routing**:
  - **React Router**: Manages the routes, including a main page for listing instruments and a default redirection to the first page.

- **Filtering and Pagination**:
  - **MenuBar Component** (`MenuBar.jsx`): Allows users to filter instruments by category and price range.
  - **Pagination Component** (`PaginationComp.jsx`): Provides navigation between pages of instrument listings.

- **Dynamic Data Loading**:
  - **Instruments List Component** (`InstrumentsListComp.jsx`): Fetches and displays a paginated list of instruments, integrating search values, filters, and pagination.

- **Responsive Design**:
  - Tailwind CSS ensures the application is fully responsive across devices.

### Deployment
The deployment process involves:
- **Build**: Run `npm run build` to create a production-ready build.
- **Hosting**: The built files can be hosted on any static hosting provider like Netlify, Vercel, or GitHub Pages like in this case.

### CI/CD Workflow
This project uses GitHub Actions to automate the deployment process. The workflow is defined in the `deploy.yml` file and includes the following steps:

1. **Trigger**:
   - The workflow is triggered by a push event to the `main` branch.

2. **Install Dependencies**:
   - Node.js is set up in the environment, and the project dependencies are installed using `npm install`.

3. **Build**:
   - The project is built using `npm run build` to generate production-ready assets.

4. **Deployment**:
   - Using the peaceiris/actions-gh-pages@v3 the built files are deployed to github pages directly from the `main` branch.

This CI/CD process ensures that every change pushed to the `main` branch is automatically built and deployed, keeping the live version of the application up to date with the latest code changes.

### Contact

