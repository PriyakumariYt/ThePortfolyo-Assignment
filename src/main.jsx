import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss'
import { AuthProvider } from './contextApi/TokenApi.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider userId="65b3a22c01d900e96c4219ae">
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </AuthProvider>
)
