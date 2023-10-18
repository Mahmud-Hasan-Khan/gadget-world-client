import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import myCreatedRouter from './Router/Route';
import AuthProviders from './Provider/AuthProviders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={myCreatedRouter} />
    </AuthProviders>
  </React.StrictMode>,
)
