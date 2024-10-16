import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Destination from './Destination'
import Makanan from './Makanan'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/destination',
    element: <Destination></Destination>
  },
  {
    path: '/makanan',
    element: <Makanan></Makanan>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
