import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { LandingPage } from './screens/LandingPage/index.tsx';
import { ErrorPage } from './screens/ErrorPage/index.tsx';

import './index.css'
import { PopularVote } from './screens/PopularVote/index.tsx';
import { RootPage } from './screens/RootPage/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: 'popular-vote',
        element: <PopularVote />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
