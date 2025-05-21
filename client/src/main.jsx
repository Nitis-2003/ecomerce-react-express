import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"

import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import PublicRoute from './components/PublicRoute.jsx';

createRoot(document.getElementById('root')).render(
  <Provider>
  <BrowserRouter>
    <Routes>
        <Route path='/home' element={ <ProtectedRoute><App/></ProtectedRoute> } />
        <Route path='/register' element={<PublicRoute><Register/></PublicRoute>} />
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} />
    </Routes>
  </BrowserRouter>
  </Provider>
)
