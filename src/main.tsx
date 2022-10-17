import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'

// pages
// const HomePage = React.lazy(() => import("./pages/HomePage"))

import HomePage from "./pages/HomePage"
import UsersPage from "./pages/UsersPage"
import PostsPage from "./pages/PostsPage"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/",
        element: <UsersPage/>
      },
      {
        path: "/",
        element: <PostsPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
