import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import RootLayout from "./pages/Root";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import ErrorPage from "./pages/errors/ErrorPage";
import Battery from "./pages/battery/Battery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/battery",
        element: <Battery />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EuiProvider colorMode="light">
      <RouterProvider router={router} />
    </EuiProvider>
  </React.StrictMode>
);
