import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import RootLayout from './pages/Root';
import CameraDashboard from './pages/cameras/list/CameraDashboard.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import ErrorPage from './pages/errors/ErrorPage';
import EventDashboard from './pages/events/EventDashboard';
import StreamDashboard from './pages/streams/list/StreamDashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/streams',
        element: <StreamDashboard />,
      },
      {
        path: '/cameras',
        element: <CameraDashboard />,
      },
      {
        path: '/events',
        element: <EventDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
