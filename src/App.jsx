import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import Index from './pages/Index'
import ProductListing from './components/ProductListing/ProductListing'

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Index/>,
      children:[
        {
          path: '',
          element: <Home/>
        },
        {
          path: "c/:path",
          element: <ProductListing/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
