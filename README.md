# CoWrite - Collaborative Blog Platform

CoWrite is a modern, full-featured blog platform built as a learning project to demonstrate React development skills and modern web technologies. It simulates a collaborative blogging environment where users can write, share, and interact with articles.

## 🚀 Project Overview

This project showcases the implementation of a complete blog platform with user profiles, article management, commenting system, and responsive design. Built with React 19 and modern development tools, it demonstrates best practices in component architecture, state management, and API integration.

## ✨ Features

### Core Functionality
- **Article Management**: Browse, read, and discover articles with rich content
- **User Profiles**: Detailed author profiles with bio, tech stack, and article count
- **Comment System**: Interactive commenting on articles with user attribution
- **Search & Filter**: Find articles by tags, authors, and categories
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Article Features
- Cover images with random placeholder generation
- Read count tracking and engagement metrics
- Tag-based categorization (React, Vue, JavaScript, DevOps, etc.)
- Publication date tracking
- Comment count display

### User Experience
- Clean, modern UI with Ant Design components
- Smooth navigation between articles and profiles
- Author-specific article listings
- Interactive user list with filtering capabilities

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks and features
- **Vite** - Fast build tool and development server
- **Styled Components** - CSS-in-JS styling solution
- **Ant Design** - Professional UI component library
- **Axios** - HTTP client for API requests

### Backend & Data
- **JSON Server** - Mock REST API for development
- **Local JSON Database** - Structured data with users, articles, and comments

### Development Tools
- **ES6+** - Modern JavaScript features
- **JSX** - React component syntax
- **NPM** - Package management

## 📁 Project Structure

```
CoWrite/
├── src/
│   ├── Components/          # Reusable UI components
│   │   ├── AuthorProfile.jsx    # Author profile display
│   │   ├── BlogCard.jsx         # Article preview cards
│   │   ├── BlogDetails.jsx      # Full article view
│   │   ├── BlogByAuthor.jsx     # Author's articles list
│   │   └── UserList.jsx         # User directory
│   ├── pages/               # Main application pages
│   │   └── Home.jsx             # Homepage with article feed
│   ├── shared/              # Shared components
│   │   ├── NavBar.jsx           # Navigation component
│   │   └── Comment.jsx          # Comment display component
│   ├── Hooks/               # Custom React hooks
│   │   └── api.js               # API integration utilities
│   └── App.jsx              # Main application component
├── data/
│   └── db.json              # Mock database with sample data
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Learning Objectives

This project demonstrates proficiency in:

- **React Fundamentals**: Components, props, state, and lifecycle methods
- **Modern React**: Hooks (useState, useEffect), functional components
- **API Integration**: RESTful API consumption with Axios
- **Component Architecture**: Reusable, maintainable component design
- **State Management**: Local state and data flow between components
- **Responsive Design**: Mobile-first approach with modern CSS
- **Development Workflow**: Vite tooling, hot reload, and development server
- **Data Modeling**: Structured JSON data design and relationships

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CoWrite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development environment**
   
   Open two terminal windows:
   
   **Terminal 1 - Frontend Development Server:**
   ```bash
   npm run dev
   ```
   
   **Terminal 2 - JSON Server (Backend):**
   ```bash
   npm run server
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - JSON Server API: http://localhost:8000

## 📊 Sample Data

The project includes comprehensive sample data:
- **50 Users** with diverse tech stacks and profiles
- **140 Articles** across various topics and categories
- **500+ Comments** demonstrating user engagement
- **Multiple Tags**: React, Vue, JavaScript, DevOps, API, Testing, etc.

## 🔗 API Endpoints

The JSON Server provides the following endpoints:

- `GET /users` - Fetch all users
- `GET /users/:id` - Fetch specific user
- `GET /articals` - Fetch all articles (note: "articals" in original data)
- `GET /articals/:id` - Fetch specific article
- `GET /comments` - Fetch all comments
- `GET /comments?articleId=:id` - Fetch comments for specific article

## 🎨 UI Components

### Key Components
- **BlogCard**: Article preview with image, title, author, and stats
- **AuthorProfile**: User information with avatar, bio, and article count
- **BlogDetails**: Full article view with content and comments
- **UserList**: Filterable directory of all platform users
- **NavBar**: Main navigation component
- **Comment**: Individual comment display with user attribution

## 🔍 Features in Detail

### Article System
- Articles include cover images, content, tags, and metadata
- Read count tracking for engagement metrics
- Publication date display for content freshness
- Tag-based categorization for easy discovery

### User Profiles
- Avatar integration with Pravatar service
- Technology stack display (React, Vue, Angular, etc.)
- Bio information and article count
- Individual user pages with their published content

### Commenting System
- User-attributed comments with avatars
- Timestamp tracking for comment organization
- Article-specific comment threads

## 📝 Learning Outcomes

Through this project, I've gained experience in:

1. **React Development**: Building complex UIs with modern React patterns
2. **Component Design**: Creating reusable, maintainable components
3. **API Integration**: Working with REST APIs and async data
4. **State Management**: Managing application state across components
5. **Responsive Design**: Creating mobile-friendly interfaces
6. **Development Tools**: Using modern tooling like Vite for efficient development
7. **Project Structure**: Organizing a medium-scale React application

## 🚧 Future Enhancements

Potential improvements for continued learning:
- Add user authentication and authorization
- Implement article creation and editing
- Add real-time features with WebSockets
- Integrate with a real backend database
- Add unit and integration testing
- Implement advanced search functionality
- Add article bookmarking and favorites

## 📄 License

This is a learning project created for educational purposes.

---

*This project was built as part of my journey learning React and modern web development. It demonstrates practical application of frontend technologies in a real-world scenario.*
