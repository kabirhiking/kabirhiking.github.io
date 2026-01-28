import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Error boundary to catch React errors
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found!');
  }
  
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
} catch (error) {
  console.error('Failed to render app:', error);
  // Fallback: show error message in the DOM
  document.body.innerHTML = `
    <div style="color: red; padding: 20px; font-family: Arial, sans-serif;">
      <h1>App Failed to Load</h1>
      <p>Error: ${error.message}</p>
      <p>Check the browser console for more details.</p>
    </div>
  `;
}
