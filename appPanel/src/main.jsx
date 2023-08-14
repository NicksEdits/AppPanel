import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage.jsx'
import './index.css'
import Accueil from './Pages/Accueil/Accueil.jsx';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LandingPage />,
  },
  {
    path: "/Acceuil",
    element: <Accueil />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
