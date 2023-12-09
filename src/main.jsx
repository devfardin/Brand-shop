import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './assets/components/Route.jsx'
import AppContext from './assets/components/AppContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppContext>
   <RouterProvider router={Route}> </RouterProvider>
   </AppContext>
  </React.StrictMode>,
)
