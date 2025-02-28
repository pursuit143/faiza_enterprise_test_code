import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import Index from './pages/Index'
import ProductListing from './components/ProductListing/ProductListing'
import ProductDetails from './components/Product_Details/ProductDetails'
import CheckOut from './pages/CheckOut'

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
    },
    {
      path: '*',
      element: <h1>404 Not Found</h1>
    },
    {
      path: "checkout/cart",
      element: <CheckOut/>
    }
  ])

  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
