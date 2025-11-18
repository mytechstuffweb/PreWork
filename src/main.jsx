import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CatsApp from "./CatsApp.jsx";

import './index.css'

createRoot(document.getElementById('root')).render(
//   <StrictMode>
    <CatsApp />
//   </StrictMode>,
)
