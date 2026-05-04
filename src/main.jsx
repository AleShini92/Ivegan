import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//map-style
import './style/style.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
