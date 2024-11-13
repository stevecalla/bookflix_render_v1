import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import LoginPage from './pages/LoginPage.tsx';

const router = createBrowserRouter([
  {
	path: "/",
	element: <App />,
	errorElement: <ErrorPage />,
    children: [
      /*{
        index: true,
        element: <MainPage />
      }, */
      {
        path:'/login',
        element: <LoginPage />
     },
    ]
},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
	<RouterProvider router={router} />
  </React.StrictMode>
);