import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Check if the root element exists
if (rootElement) {
  // Create a root for the React app
  const root = createRoot(rootElement);

  // Render the App component into the root
  root.render(<App />);
} else {
  console.error('Root element not found!');
}