import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './store/RegisterContext/ContextProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App tab='home' />
    </ContextProvider>
  </React.StrictMode>
);
