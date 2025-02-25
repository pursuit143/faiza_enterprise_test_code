import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import Index from './pages/Index'

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
