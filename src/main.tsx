import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import { PocketProvider } from "./hooks/PocketContext.tsx";
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <PocketProvider>
            <App />
            <ToastContainer />
        </PocketProvider>
      </BrowserRouter>
  </StrictMode>,
)
