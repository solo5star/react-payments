import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './components/App';
import { CreditCardListPage } from './components/pages/CreditCardListPage';
import { NewCreditCardPage } from './components/pages/NewCreditCardPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <CreditCardListPage />,
        },
        {
          path: 'register',
          element: <NewCreditCardPage />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  },
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);