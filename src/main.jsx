// src/main.jsx
// ------------------------------------------------------------
// Entry point: mounts the React app into <div id="root"> in
// index.html, then imports global CSS (including Tailwind).
// ------------------------------------------------------------

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'      // global styles + Tailwind
import App from './App'   // our only component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
