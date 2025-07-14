import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, HashRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> }
    ]
  }
], { basename: "/versa-landingpage" })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <RouterProvider router={routes} />
    </HashRouter>
  </StrictMode>,
)
