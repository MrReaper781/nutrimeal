import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './screens/Home';
import Bmi from './screens/Bmi';
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path: "/bmi",
      element: <><Navbar/><Bmi/><Footer/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
