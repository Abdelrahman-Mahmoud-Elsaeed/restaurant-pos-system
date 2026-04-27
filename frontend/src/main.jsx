import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UIProvider } from "./context/UiContext.jsx"
import "./index.css"
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </StrictMode>,
)
