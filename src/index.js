import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Home from './Pages/Home/index.jsx';

import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider> 
    <Home />
    </UserProvider>
  </React.StrictMode>
);

