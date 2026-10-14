import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import { Analytics } from '@vercel/analytics/react';


export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
        <Analytics />
      </BrowserRouter>
    </HelmetProvider>
  );
}
