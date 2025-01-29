import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contacts from './Contacts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contacts />
  </StrictMode>,
)
