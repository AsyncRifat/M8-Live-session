import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Error from '../pages/Error';

import Favorites from '../pages/Favorites';
import About from '../pages/About';
import PhoneDetails from '../pages/PhoneDetails';
import EmptyState from '../components/ui/EmptyState';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: (
          <p className="text-center">Loading, please wait...</p>
        ),
        loader: () => fetch('../phones.json'),
      },
      {
        path: 'favorites',
        Component: Favorites,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'phone-details/:id',
        Component: PhoneDetails,
        hydrateFallbackElement: (
          <p className="text-center">Loading, please wait...</p>
        ),
        loader: () => fetch('../phones.json'),
      },
    ],
  },
]);
