import React from 'react'
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Login from "./pages/Login";
import { RouterProvider } from "react-router";
import RegisterAttendee from "./pages/RegisterAttendee";
import RegisterOrganizer from "./pages/RegisterOrganizer";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Layout from "./components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register-attendee",
    element: <RegisterAttendee />,
  },
  {
    path: "/register-organizer",
    element: <RegisterOrganizer />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
    }}
  ></RouterProvider>
);