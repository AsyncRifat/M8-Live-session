import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router';
import { router } from './Routers/Routes.jsx';
import CartProvider from './providers/CartProvider.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="bottom-right" />
    </CartProvider>
  </StrictMode>
);
