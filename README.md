# Blonix - Blog Platform

Blonix is a modern blog platform built with React and Vite that uses json-server for backend data management.

## Tech Stack

- React 19
- Vite
- Styled Components
- Ant Design
- Axios
- JSON Server (mock backend)

## Setup Instructions

### Installation

```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Start the JSON server (in a separate terminal):
```bash
npm run server
```

The development server will run at http://localhost:5173 (or another port if 5173 is busy)
The JSON server will run at http://localhost:8000

## Data Structure

The application uses the following data models:

- **Users**: Blog authors and their profile information
- **Articles**: Blog posts with content, tags, and metadata
- **Comments**: User comments on articles

## Features

- Browse articles by different categories and tags
- View user profiles and their published articles
- Comment on articles
- Sort and filter articles by various criteria
- Responsive design for all devices
