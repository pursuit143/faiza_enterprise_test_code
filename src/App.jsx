import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import Index from './pages/Index'
import ProductListing from './components/ProductListing/ProductListing'
import ProductDetails from './components/Product_Details/ProductDetails'

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
        },
        {
          path: "p/:id/:id",
          element: <ProductDetails/>
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
